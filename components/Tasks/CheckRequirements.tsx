import { Inspection } from "@/types/Inspection";
import { Spinner } from "../Spinner";
import { Requirements } from "@/types/Requirements";

export default function CheckRequirements({
  requirements,
  handleCheckRequirements,
  isLoading,
}: {
  requirements: any;
  handleCheckRequirements: () => void;
  isLoading: boolean;
}) {
  return (
    <div className="h-fit lg:h-[45vh] bg-white border border-[#D5D7D8] flex flex-col rounded-[10px] p-6 gap-2">
      <h1 className="font-monts font-bold text-lg text-darkerGray underline">
        Inspection Task - Check Requirements
      </h1>
      <h6 className="font-monts font-semibold text-sm text-darkerGray">
        Check the list of requirements that the client submitted below:
      </h6>
      <div className="flex flex-col gap-5 h-fit items-start overflow-y-auto">
        <ul className="list-disc gap-2 ml-8">
          {Object.keys(requirements).map((requirement) => (
            <li>
              <ul className="list-none">
                <li>{requirementTexts[requirement]}</li>
                {requirements[requirement].map((link: string) => {
                  return (
                    <li>
                      <a
                        href={link}
                        target="_blank"
                        className="text-primaryBlue hover:underline"
                      >
                        Download file ({extractFilenameFromFirebaseURL(link)})
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-2 self-end">
        <button
          type="button"
          className="w-full md:w-fit flex items-center justify-center gap-2 cursor-pointer text-gray border bg-[#973C3C] border-[#973C3C] rounded-lg font-monts font-semibold text-sm text-white h-fit p-2.5"
        >
          Client did not meet the requirements
        </button>
        <button
          type="button"
          className="w-full md:w-fit flex items-center justify-center gap-2 cursor-pointer text-gray border bg-primaryBlue border-primaryBlue rounded-lg font-monts font-semibold text-sm text-white h-fit p-2.5"
        >
          {isLoading ? (
            <>
              <Spinner /> Submitting...
            </>
          ) : (
            <>Proceed with the inspection</>
          )}
        </button>
      </div>
    </div>
  );
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
} as any;

function extractFilenameFromFirebaseURL(url: string): string {
  // Decode the URL to convert %2F to /
  const decodedURL = decodeURIComponent(url);

  // Find the last occurrence of /
  const lastSlashIndex = decodedURL.lastIndexOf("/");

  // Find the start of the query parameters
  const queryStartIndex = decodedURL.indexOf("?", lastSlashIndex);

  // Extract the filename and remove the last character which is a }
  const filename = decodedURL.substring(lastSlashIndex + 1, queryStartIndex);

  return filename.split("-")[1];
}
