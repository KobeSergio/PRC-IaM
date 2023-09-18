import React, { useState } from "react";
import { Spinner } from "../Spinner";

export default function NIM() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSendNIM = () => {
    //insert logic here
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className="h-full lg:h-[45vh] bg-white border border-[#D5D7D8] flex flex-col rounded-[10px] p-6 gap-2">
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
        <form className="h-full lg:h-[23vh] flex flex-col gap-2 overflow-auto">
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="checkbox1"
              name=""
              title="s"
              value=""
              type="checkbox"
              className="cursor-pointer accent-primaryBlue"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="checkbox1"
            >
              Copy of organizational structure indicating the names of its
              employees/staff and their corresponding duties and
              responsibilities
            </label>
          </div>
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="checkbox2"
              name=""
              title="s"
              value=""
              type="checkbox"
              className="cursor-pointer accent-primaryBlue"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="checkbox2"
            >
              Copies of qualifications and credentials, including professional
              credentials (PIC, CoR, APO/AIPO ID/COGS) of the employees/staff,
              if applicable
            </label>
          </div>
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="checkbox3"
              name=""
              title="s"
              value=""
              type="checkbox"
              className="cursor-pointer accent-primaryBlue"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="checkbox3"
            >
              Narrative or PowerPoint presentation of the
              institution&apos;s/establishment&apos;s profile, including
              relevant facilities, equipment, and resources
            </label>
          </div>
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="checkbox4"
              name=""
              title="s"
              value=""
              type="checkbox"
              className="cursor-pointer accent-primaryBlue"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="checkbox4"
            >
              Video presentation and photos of the
              institution&apos;s/establishment&apos;s facilities, equipment, and
              resources
            </label>
          </div>
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="checkbox5"
              name=""
              title="s"
              value=""
              type="checkbox"
              className="cursor-pointer accent-primaryBlue"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="checkbox5"
            >
              For monitoring (re-inspection), proof/evidence of the corrective
              actions taken relative to the findings during the previous
              inspection
            </label>
          </div>
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="checkbox6"
              name=""
              title="s"
              value=""
              type="checkbox"
              className="cursor-pointer accent-primaryBlue"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="checkbox6"
            >
              Documents relevant to the practice of profession (procedures
              manuals, safety manuals, waste management, and others: (Pls
              specify.)
            </label>
          </div>
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="checkbox7"
              name=""
              title="s"
              value=""
              type="checkbox"
              className="cursor-pointer accent-primaryBlue"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="checkbox7"
            >
              Filled-out Inspection and Monitoring Administrative Tool
              (ACD-IAM-05) – for validation on the date of inspection/monitoring
              and to be supported with necessary documents
            </label>
          </div>
          <div className="flex flex-row items-start lg:items-center gap-2">
            <input
              id="checkbox8"
              name=""
              title="s"
              value=""
              type="checkbox"
              className="cursor-pointer accent-primaryBlue"
            />

            <label
              className="font-monts font-medium text-sm text-darkerGray cursor-pointer"
              htmlFor="checkbox8"
            >
              Verification statement as to the authenticity and accuracy of the
              documents submitted and existence of the facilities and resources
              presented (ACD-IAM-04)
            </label>
          </div>
        </form>
        <hr className="w-full border-[#D5D7D8]"></hr>
        <div className="flex justify-end">
          <button
            className={`${
              isLoading ? "flex items-center gap-0.5" : ""
            } py-2 px-4 font-monts font-semibold text-sm text-white bg-[#3C6497] rounded-lg outline-none`}
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
