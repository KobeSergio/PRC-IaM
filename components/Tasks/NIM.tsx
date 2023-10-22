import React, { useState } from "react";
import { Spinner } from "../Spinner";
import Firebase from "@/lib/firebase";
import { Inspection } from "@/types/Inspection";
import { Log } from "@/types/Log";
import { Client } from "@/types/Client";
const firebase = new Firebase();

export default function NIM({
  inspectionDetails,
  setInspectionData,
}: {
  inspectionDetails: Inspection;
  setInspectionData: any;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [requirements, setRequirements] = useState({
    orgStructure: false,
    qualsAndCreds: false,
    narrative: false,
    vidPres: false,
    reInspection: false,
    procedureManual: false,
    safetyManual: false,
    wasteManagement: false,
    othersCheck: false,
  } as any); //List of requirements to be sent to the client

  const [others, setOthers] = useState(""); //The value of the "Others" input field

  const handleCheckboxChange = (event: any) => {
    const { id, checked } = event.target;
    setRequirements((prevState: any) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const handleSendNIM = async () => {
    if (requirements.othersCheck === true && others === "") {
      alert("Please specify the other requirements");
      return;
    }

    setIsLoading(true);

    try {
      //For each true requirement, add to the dictionary of requirements wherein the requirement is the key and the value is "" to be sent to the client
      const requirementsList = {} as any;
      for (const key in requirements) {
        if (requirements[key]) {
          requirementsList[key] = "";
        }
      }

      const requirementTexts = {
        orgStructure:
          "Copy of organizational structure indicating the names of its employees/staff and their corresponding duties and responsibilities",
        qualsAndCreds:
          "Copies of qualifications and credentials, including professional credentials (PIC, CoR, APO/AIPO ID/COGS) of the employees/staff, if applicable",
        narrative:
          "Narrative or PowerPoint presentation of the institution's/establishment's profile, including relevant facilities, equipment, and resources",
        vidPres:
          "Video presentation and photos of the institution's/establishment's facilities, equipment, and resources",
        reInspection:
          "For monitoring (re-inspection), proof/evidence of the corrective actions taken relative to the findings during the previous inspection",
        procedureManual:
          "Documents relevant to the practice of profession: Procedures Manual",
        safetyManual:
          "Documents relevant to the practice of profession: Safety Manual",
        wasteManagement:
          "Documents relevant to the practice of profession: Waste Management",
        others: others,
      } as any;

      //Create a link object in firebase
      const { expiring_link_id } = await firebase.createExpiringLink(
        inspectionDetails.inspection_id
      );

      //Create a form data object to be sent to the email sender api
      const formData = new FormData();
      formData.append("subject", "Notice of Inspection and Monitoring (NIM)");
      formData.append(
        "text",
        `Please click the link below to view the Notice of Inspection and Monitoring (NIM) for the ${
          inspectionDetails.client_details.type
        }: ${inspectionDetails.client_details.name}. 
       
       We will be requiring you to submit the following documents:
       ${Object.keys(requirementsList).map((key) => {
         return `\n- ${requirementTexts[key]}`;
       })}
     
       Submission Link: https://prc-iam-client.vercel.app/NIM/${expiring_link_id}
       
       Please be reminded that the link will expire in 7 days. Make sure to fulfill the requirements before the link expires. Failure to comply with the requirements will result in the cancellation of the inspection.
 
       Thank you!
       `
      );
      formData.append("to", inspectionDetails.client_details.email);

      //Send email to client
      await fetch("/api/emailSender", {
        method: "POST",
        body: formData,
      });

      const newInspection: Inspection = {
        ...inspectionDetails,
        inspection_task: "Sent NIM",
        requirements: requirementsList,
      };

      //Update the inspection document in firebase
      await firebase.updateInspection(newInspection);

      //Create log 
      const log: Log = {
        log_id: "",
        timestamp: new Date().toLocaleString(),
        client_details: inspectionDetails.client_details as Client,
        author_details: inspectionDetails.prb_details,
        action: "Sent NIM on " + new Date().toLocaleString(),
        author_type: "",
        author_id: "",
      };

      await firebase.createLog(log, inspectionDetails.prb_details.prb_id);
      setInspectionData(newInspection);
    } catch (error) {
      alert("Something went wrong: " + error);
    }

    setIsLoading(false);
  };
  return (
    <div className="h-full w-full bg-white border border-[#D5D7D8] flex flex-col rounded-[10px] p-6 gap-2">
      <h1 className="font-monts font-bold text-lg text-darkerGray underline">
        Inspection Task - NIM
      </h1>
      <div className="flex flex-col gap-2">
        <h6 className="font-monts font-semibold text-sm text-darkerGray">
          Fulfill the Notice of Inspection and Monitoring (NIM). Please choose
          from the list below what documents you will require the client to
          submit.
        </h6>
        <hr className="w-full border-[#D5D7D8]"></hr>
        <div className="h-full  flex flex-col gap-4  ml-3 my-2">
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="orgStructure"
              type="checkbox"
              onChange={handleCheckboxChange}
              className="cursor-pointer accent-primaryBlue w-[1.5rem] h-[1.5rem]"
            />
            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="orgStructure"
            >
              Copy of organizational structure indicating the names of its
              employees/staff and their corresponding duties and
              responsibilities
            </label>
          </div>
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="qualsAndCreds"
              type="checkbox"
              onChange={handleCheckboxChange}
              className="cursor-pointer accent-primaryBlue w-[1.5rem] h-[1.5rem]"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="qualsAndCreds"
            >
              Copies of qualifications and credentials, including professional
              credentials (PIC, CoR, APO/AIPO ID/COGS) of the employees/staff,
              if applicable
            </label>
          </div>
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="narrative"
              type="checkbox"
              onChange={handleCheckboxChange}
              className="cursor-pointer accent-primaryBlue w-[1.5rem] h-[1.5rem]"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="narrative"
            >
              Narrative or PowerPoint presentation of the
              institution&apos;s/establishment&apos;s profile, including
              relevant facilities, equipment, and resources
            </label>
          </div>
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="vidPres"
              type="checkbox"
              onChange={handleCheckboxChange}
              className="cursor-pointer accent-primaryBlue w-[1.5rem] h-[1.5rem]"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="vidPres"
            >
              Video presentation and photos of the
              institution&apos;s/establishment&apos;s facilities, equipment, and
              resources
            </label>
          </div>
          {/* <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="checkbox5"
              
              type="checkbox"
             onChange={handleCheckboxChange}
              className="cursor-pointer accent-primaryBlue w-[1.5rem] h-[1.5rem]"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="checkbox5"
            >
              For monitoring (re-inspection), proof/evidence of the corrective
              actions taken relative to the findings during the previous
              inspection
            </label>
          </div> */}
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="procedureManual"
              type="checkbox"
              onChange={handleCheckboxChange}
              className="cursor-pointer accent-primaryBlue w-[1.5rem] h-[1.5rem]"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="procedureManual"
            >
              Documents relevant to the practice of profession: Procedures
              Manual
            </label>
          </div>
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="safetyManual"
              type="checkbox"
              onChange={handleCheckboxChange}
              className="cursor-pointer accent-primaryBlue w-[1.5rem] h-[1.5rem]"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="safetyManual"
            >
              Documents relevant to the practice of profession: Safety Manual
            </label>
          </div>
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="wasteManagement"
              type="checkbox"
              onChange={handleCheckboxChange}
              className="cursor-pointer accent-primaryBlue w-[1.5rem] h-[1.5rem]"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="wasteManagement"
            >
              Documents relevant to the practice of profession: Waste Management
            </label>
          </div>
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="othersCheck"
              type="checkbox"
              onChange={handleCheckboxChange}
              className="cursor-pointer accent-primaryBlue w-[1.5rem] h-[1.5rem]"
            />
            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="others"
            >
              Others:
            </label>
            <input
              type="text"
              className={`w-full h-10 border border-[#D5D7D8] rounded-lg px-4 outline-none ${
                !requirements.othersCheck
                  ? "contrast-75 cursor-not-allowed"
                  : ""
              }`}
              onChange={(e) => setOthers(e.target.value)}
              disabled={!requirements.othersCheck}
              placeholder="Please specify"
            />
          </div>
        </div>
        <hr className="w-full border-[#D5D7D8]"></hr>
        <div className="flex justify-end">
          <button
            className={`${
              isLoading ? "flex items-center gap-0.5" : ""
            } py-2 px-4 font-monts font-semibold text-sm text-white bg-[#3C6497] rounded-lg outline-none mt-2`}
            type="button"
            onClick={handleSendNIM}
          >
            {isLoading ? (
              <>
                <Spinner />
                Sending NIM to client...
              </>
            ) : (
              "Send NIM to client"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
