"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import CancellationRequest from "@/components/Modals/CancellationRequest";
import EditClient from "@/components/Modals/Dashboard/EditClient";
import ReschedulingRequest from "@/components/ReschedulingRequest";
import IMWPRTask from "@/components/Tasks/IMWPR";
import NIM from "@/components/Tasks/NIM";
import PendingWaiting from "@/components/Tasks/PendingWaiting";
import { ScheduleApproval } from "@/components/Tasks/ScheduleApproval";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BsPencil, BsX } from "react-icons/bs";
import { IMWPR, IMWPRContent } from "@/types/IMWPR";
import Firebase from "@/lib/firebase";
import { Inspection } from "@/types/Inspection";
import { Client } from "@/types/Client";
import { useSession } from "next-auth/react";
import { Log } from "@/types/Log";
import CheckRequirements from "@/components/Tasks/CheckRequirements";
import { extractFilenameFromFirebaseURL } from "@/lib/filenameExtractor";
import { formatDateToDash } from "@/lib/formatDates";
import InspectionSummary from "@/components/Tasks/InspectionSummary";

const firebase = new Firebase();

export default function Page({ params }: { params: { id: string } }) {
  const [showEditInspectionModal, setShowEditInspectionModal] = useState(false);
  const [showCancellationModal, setShowCancellationModal] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { data }: any = useSession();
  const [inspectionData, setInspectionData] = useState<Inspection>(
    {} as Inspection
  );

  useEffect(() => {
    if (params.id) {
      firebase
        .getInspection(params.id as string)
        .then((data) => {
          if (data == null) return;
          setInspectionData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [params.id]);

  const handleSubmitEditClient = async (new_client_details: Client) => {
    //insert logic here
    if (!new_client_details) return alert("Please fill out all fields.");
    setIsLoading(true);

    await firebase.updateClient(new_client_details).then(() => {
      setInspectionData({
        ...inspectionData,
        client_details: new_client_details,
      });
    });

    setShowEditInspectionModal(false);
    setIsLoading(false);
  };

  const handleSubmitCancellationRequest = async (
    reason: string,
    remarks: string
  ) => {
    //System shall allow the cancellation, if 1 is selected, must be at least seven (7) days before the day of inspection. If 2 is selected, at least one (1) month prior to the scheduled date of inspection.
    if (reason != "others") {
      const today = new Date();
      const inspectionDate = new Date(inspectionData.inspection_date);
      if (inspectionDate.getTime() - today.getTime() < 7 * 24 * 60 * 60 * 1000)
        return alert(
          "Inspection is scheduled within the next 7 days, the system shall not allow the cancellation of inspection."
        );
    } else {
      //2.) If 1 is selected, must be at least seven (7) days before the day of inspection. If 2 is selected, at least one (1) month prior to the scheduled date of inspection.
      const today = new Date();
      const inspectionDate = new Date(inspectionData.inspection_date);
      if (inspectionDate.getTime() - today.getTime() < 30 * 24 * 60 * 60 * 1000)
        return alert(
          "For other reasons, inspection is scheduled within the next 30 days, the system shall not allow the cancellation of inspection"
        );
    }

    if (!reason || !remarks) return alert("Please fill out all fields.");
    if (
      !confirm(
        "Are you sure you want to request for cancellation? This action can't be undone."
      )
    ) {
      return;
    }

    setIsLoading(true);

    let inspection: Inspection = {} as Inspection;
    let log: Log = {} as Log;

    //1.) Create log
    log = {
      log_id: "",
      timestamp: new Date().toLocaleString(),
      client_details: inspectionData.client_details as Client,
      author_details: inspectionData.prb_details,
      action: "Requested for cancellation due to " + reason + ": " + remarks,
      author_type: "",
      author_id: "",
    };

    const currentInspectionTask = inspection.inspection_task;
    //2.) Update inspection
    inspection = {
      ...inspectionData,
      inspection_task: `For cancellation recommendation <${reason}/${remarks}/${currentInspectionTask}/${formatDateToDash(
        new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
      )}>`,
    };

    await firebase.createLog(log, data.prb_id);
    await firebase.updateInspection(inspection);
    setInspectionData(inspection);
    setShowCancellationModal(false);
    setIsLoading(false);
  };

  const handleSubmitReschedulingRequest = async (
    date: string,
    reason: string
  ) => {
    if (!date || !reason) return alert("Please fill out all fields.");
    if (
      !confirm(
        "Are you sure you want to request for rescheduling? This action can't be undone."
      )
    ) {
      return;
    }

    setIsLoading(true);

    let inspection: Inspection = {} as Inspection;
    let log: Log = {} as Log;

    //1.) Create log
    log = {
      log_id: "",
      timestamp: new Date().toLocaleString(),
      client_details: inspectionData.client_details as Client,
      author_details: inspectionData.prb_details,
      action:
        "Requested for rescheduling to be on " + date + " due to " + reason,
      author_type: "",
      author_id: "",
    };

    //2.) Update inspection
    inspection = {
      ...inspectionData,
      inspection_task: `Scheduling - RO <${date}/${reason}/${formatDateToDash(
        new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
      )}>`,
    };

    await firebase.createLog(log, data.prb_id);
    await firebase.updateInspection(inspection);

    setInspectionData(inspection);
    setShowRescheduleModal(false);
    setIsLoading(false);
  };

  const handleScheduleApproval = async (
    decision: Number,
    newDate: string,
    reason: string
  ) => {
    if (decision == 2 && (newDate == "" || reason == ""))
      return alert("Please fill out all fields.");
    if (!data) return;
    setIsLoading(true);

    let inspection: Inspection = {} as Inspection;
    let log: Log = {} as Log;
    if (decision == 1) {
      //Approved
      //1.) Create log
      log = {
        log_id: "",
        timestamp: new Date().toLocaleString(),
        client_details: inspectionData.client_details as Client,
        author_details: inspectionData.prb_details,
        action: "Accomplished Scheduling",
        author_type: "",
        author_id: "",
      };

      //2.) Update inspection
      if (
        new Date(inspectionData.inspection_date).getFullYear() ==
        new Date().getFullYear()
      ) {
        //If inspection date is succeeding year, set inspection status to "Approved"
        inspection = {
          ...inspectionData,
          inspection_task: `For inspection recommendation <${formatDateToDash(
            new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
          )}>`,
          //If the inspection task is "Scheduling - RO <date/reason>", get the date and set it as the inspection date
          inspection_date: inspectionData.inspection_task.includes("<")
            ? inspectionData.inspection_task.split("<")[1].split("/")[0]
            : inspectionData.inspection_date,
        };
      } else {
        //Else, set inspection status to "For inspection recommendation"
        inspection = {
          ...inspectionData,
          status: "Approved",
          inspection_task: `For NIM <${formatDateToDash(
            new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
          )}>`,
          //If the inspection task is "Scheduling - RO <newDate/reason/currDate>", get the date and set it as the inspection date
          inspection_date: inspectionData.inspection_task.includes("<")
            ? inspectionData.inspection_task.split("<")[1].split("/")[0]
            : inspectionData.inspection_date,
        };
      }
    } else if (decision == 2) {
      //Negotiate
      //1.) Create log
      log = {
        log_id: "",
        timestamp: new Date().toLocaleString(),
        client_details: inspectionData.client_details as Client,
        author_details: inspectionData.prb_details,
        action:
          "Scheduled a new inspection date at " +
          newDate +
          "for the reason of: " +
          reason,
        author_type: "",
        author_id: "",
      };

      //2.) Update inspection
      inspection = {
        ...inspectionData,
        inspection_task: `Scheduling - RO <${newDate}/${reason}/${formatDateToDash(
          new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
        )}>`,
      };
    }

    await firebase.createLog(log, data.prb_id);
    await firebase.updateInspection(inspection);
    setInspectionData(inspection);
    setIsLoading(false);
  };

  const handleCheckRequirements = async (decision: Number) => {
    let inspection: Inspection = {} as Inspection;
    let log: Log = {} as Log;

    if (decision == 1) {
      //1.) Create log
      log = {
        log_id: "",
        timestamp: new Date().toLocaleString(),
        client_details: inspectionData.client_details as Client,
        author_details: inspectionData.prb_details,
        action: "Reviewed inspection requirements",
        author_type: "",
        author_id: "",
      };

      //2.) Update inspection
      inspection = {
        ...inspectionData,
        inspection_task: `For TO <${formatDateToDash(
          new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
        )}>`,
      };
    } else {
      //1.) Create log
      log = {
        log_id: "",
        timestamp: new Date().toLocaleString(),
        client_details: inspectionData.client_details as Client,
        author_details: inspectionData.prb_details,
        action: "Cancelled inspection due to missing requirements",
        author_type: "",
        author_id: "",
      };

      //2.) Update inspection
      inspection = {
        ...inspectionData,
        inspection_task: `Inspection Cancelled`,
        status: "Cancelled",
      };
    }
    await firebase.createLog(log, data.prb_id);
    await firebase.updateInspection(inspection);

    setInspectionData(inspection);
    setShowRescheduleModal(false);
    setIsLoading(false);
  };

  const handleIMWPRSubmission = async (IMWPR: IMWPR) => {
    setIsLoading(true);
    //1.) Create log
    let log: Log = {} as Log;
    log = {
      log_id: "",
      timestamp: new Date().toLocaleString(),
      client_details: inspectionData.client_details as Client,
      author_details: inspectionData.prb_details,
      action: "Accomplished IMWPR",
      author_type: "",
      author_id: "",
    };

    //2.) Update inspection
    let inspection: Inspection = {} as Inspection;

    if (
      //If there are remaining tasks from other parties
      inspectionData.inspection_task.includes("IMAT")
    ) {
      inspection = {
        ...inspectionData,
        inspection_task: inspectionData.inspection_task.replace("IMWPR", ""),
        inspection_IMWPR: IMWPR as any,
        status: IMWPR.compliance_decision,
      };
    } else {
      inspection = {
        ...inspectionData,
        inspection_task: "Inspection Finished",
        inspection_IMWPR: IMWPR as any,
        status: IMWPR.compliance_decision,
      };
    }

    await firebase.createLog(log, data.prb_id);
    await firebase.updateInspection(inspection);
    setInspectionData(inspection);
    setIsLoading(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      // null check added here
      if (showEditInspectionModal) {
        body.style.overflow = "hidden"; // Disable scrolling
      } else {
        body.style.overflow = "auto"; // Enable scrolling
      }
    }
  }, [showEditInspectionModal]);

  if (Object.keys(inspectionData).length == 0) return <></>;

  const breadcrumbItems = [
    {
      name: "Home",
      route: "/dashboard",
    },
    {
      name: inspectionData.client_details.name,
    },
  ];

  const task = inspectionData.inspection_task.toLowerCase();

  return (
    <>
      <EditClient
        isOpen={showEditInspectionModal}
        setter={() => setShowEditInspectionModal(false)}
        isLoading={isLoading}
        onSubmit={handleSubmitEditClient}
        client_details={inspectionData.client_details}
      />
      <CancellationRequest
        isOpen={showCancellationModal}
        setter={() => setShowCancellationModal(false)}
        isLoading={isLoading}
        onSubmit={handleSubmitCancellationRequest}
      />
      <ReschedulingRequest
        isOpen={showRescheduleModal}
        setter={() => setShowRescheduleModal(false)}
        isLoading={isLoading}
        onSubmit={handleSubmitReschedulingRequest}
      />
      <div className="min-h-[75vh] w-full flex flex-col gap-5">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="w-full bg-white border border-[#D5D7D8] flex flex-col rounded-[10px] p-6 gap-2">
          <div className="flex flex-row justify-between items-center">
            <h1 className="font-monts font-bold text-lg text-darkerGray">
              Inspection Details
            </h1>
            <div
              className="flex flex-row gap-2 cursor-pointer items-center"
              onClick={() => setShowEditInspectionModal(true)}
            >
              <BsPencil className="fill-darkerGray" />
              <p className="font-monts text-sm font-semibold text-darkerGray">
                Edit
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h6 className="font-monts text-sm font-semibold text-darkGray">
                Name
              </h6>
              <p className="font-monts text-sm font-semibold text-darkerGray">
                {inspectionData.client_details.name}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="font-monts text-sm font-semibold text-darkGray">
                Type
              </h6>
              <p className="font-monts text-sm font-semibold text-darkerGray">
                {inspectionData.client_details.type}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="font-monts text-sm font-semibold text-darkGray">
                Location
              </h6>
              <p className="font-monts text-sm font-semibold text-darkerGray">
                {inspectionData.client_details.address}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="font-monts text-sm font-semibold text-darkGray">
                Email
              </h6>
              <p className="font-monts text-sm font-semibold text-primaryBlue hover:underline">
                {inspectionData.client_details.email}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="font-monts text-sm font-semibold text-darkGray">
                Mode
              </h6>
              <p className="font-monts text-sm font-semibold text-darkerGray">
                {inspectionData.inspection_mode}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="font-monts text-sm font-semibold text-darkGray">
                Date Issued
              </h6>
              <p className="font-monts text-sm font-semibold text-darkerGray">
                {formatDateToDash(new Date(inspectionData.createdAt))}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="font-monts text-sm font-semibold text-darkGray">
                Inspection Date
              </h6>
              <p className="font-monts text-sm font-semibold text-darkerGray">
                {inspectionData.inspection_task == "Scheduling"
                  ? "TBD"
                  : inspectionData.inspection_date}
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between mt-4">
            {inspectionData.inspection_TO !== "" && (
              <h6 className="font-monts text-sm font-semibold text-darkerGray">
                Travel Order:{" "}
                <a
                  className="text-primaryBlue"
                  href={inspectionData.inspection_TO}
                  target="_blank"
                >
                  #
                  {extractFilenameFromFirebaseURL(inspectionData.inspection_TO)}
                </a>
              </h6>
            )}
            {inspectionData.inspection_COC !== "" && (
              <a
                href={inspectionData.inspection_COC}
                target="_blank"
                className="font-monts text-sm font-semibold text-primaryBlue underline"
              >
                Certificate of Compliance is valid until{" "}
                {
                  //Add 5 years to the fulfilledAt date
                  formatDateToDash(
                    new Date(
                      new Date(inspectionData.fulfilledAt).setFullYear(
                        new Date(inspectionData.fulfilledAt).getFullYear() + 3
                      )
                    )
                  )
                }
              </a>
            )}
          </div>
        </div>

        {/* If inspection data is scheduling and if a cancellation/rescheduling request is already ongoing, dont show the btns */}
        {task != "scheduling" &&
          task.includes("for") &&
          (task.includes("approval") ||
            inspectionData.inspection_task
              .toLowerCase()
              .includes("recommendation")) && (
            <div className="flex flex-row flex-wrap justify-end gap-2">
              {
                //If inspection date is 45 days left, do not show reschedule button
                new Date(inspectionData.inspection_date).getTime() -
                  new Date().getTime() >
                  45 * 24 * 60 * 60 * 1000 && (
                  <button
                    type="button"
                    onClick={() => setShowRescheduleModal(true)}
                    className="w-full md:w-fit flex items-center justify-center gap-2 cursor-pointer text-gray border bg-primaryBlue border-primaryBlue rounded-lg font-monts font-semibold text-sm text-white h-fit p-2.5"
                  >
                    Request for rescheduling
                  </button>
                )
              }
              <button
                type="button"
                onClick={() => setShowCancellationModal(true)}
                className="w-full md:w-fit flex items-center justify-center gap-2 cursor-pointer text-gray border bg-[#973C3C] border-[#973C3C] rounded-lg font-monts font-semibold text-sm text-white h-fit p-2.5"
              >
                Request for cancellation
              </button>
            </div>
          )}

        {task.includes("scheduling - prb") ? (
          <ScheduleApproval
            requestedDate={
              //If the inspection task is "Scheduling - PRB <date/reason>", get the date
              inspectionData.inspection_task.includes("<")
                ? inspectionData.inspection_task.split("<")[1].split("/")[0]
                : ""
            }
            reason={
              //If the inspection task is "Scheduling - PRB <date/reason>", get the reason
              inspectionData.inspection_task.includes("<")
                ? inspectionData.inspection_task.split("<")[1].split("/")[1]
                : ""
            }
            decision={handleScheduleApproval}
            isLoading={isLoading}
          />
        ) : //Check if inspection date is on or after today and if the task contains imwpr
        new Date().getTime() -
            new Date(inspectionData.inspection_date).getTime() >=
            0 && task.includes("imwpr") ? (
          <IMWPRTask
            handleIMWPRSubmission={handleIMWPRSubmission}
            isLoading={isLoading}
          />
        ) : task.includes("for nim") ? (
          <NIM
            inspectionDetails={inspectionData}
            setInspectionData={setInspectionData}
          />
        ) : task.includes("review inspection requirements") ? (
          //To follow interface where the client can upload the requirements
          <CheckRequirements
            requirements={inspectionData.requirements}
            handleCheckRequirements={handleCheckRequirements}
            isLoading={isLoading}
            client_email={inspectionData.client_details.email}
            setIsLoading={setIsLoading}
            prb_email={inspectionData.prb_details.email}
          />
        ) : task.includes("finished") ? (
          <>
            <InspectionSummary inspectionDetails={inspectionData} />
          </>
        ) : (
          <PendingWaiting task={task} />
        )}
      </div>
    </>
  );
}
