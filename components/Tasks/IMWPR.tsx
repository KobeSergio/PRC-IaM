import React, { useState } from "react";
import { Spinner } from "../Spinner";
import { Inspection } from "@/types/Inspection";
import { BsX } from "react-icons/bs";
import Sections from "../IMWPR/Sections";
import {
  sectionA,
  sectionB,
  sectionC,
  sectionD,
  sectionE,
  sectionF,
  sectionG,
  sectionH,
  sectionI,
  sectionJ,
  sectionK,
  sectionL,
  sectionM,
  sections,
} from "@/lib/imwprSections";
import Summary from "../IMWPR/Summary";
import { IMWPR, IMWPRContent } from "@/types/IMWPR";

export default function IMWPR({
  isLoading,
  handleIMWPRSubmission,
}: {
  isLoading: any;
  handleIMWPRSubmission: (imwpr: IMWPR) => void;
}) {
  const [inspectors, setInspectors] = useState<string[]>([""] as string[]);

  const addNewInspector = () => {
    setInspectors((prevInspectors) => [...prevInspectors, ""]);
  };

  const removeInspector = (index: number) => {
    setInspectors((prevInspectors) =>
      prevInspectors.filter((_, i) => i !== index)
    );
  };

  const handleInspectorChange = (index: number, value: string) => {
    setInspectors((prevInspectors) =>
      prevInspectors.map((inspector, i) => (i === index ? value : inspector))
    );
  };

  const [selectedAnswers, setSelectedAnswers] = useState<IMWPRContent[][]>(
    sections.map((section, index) =>
      section.map(
        (question) =>
          ({
            section: index,
            sectionText: sectionTexts[index],
            questionId: question.id,
            questionText: question.text,
            remark: "",
            compliance: false,
          } as IMWPRContent)
      )
    )
  );

  const updateRemark = (
    sectionIndex: number,
    questionId: number,
    newRemark: string
  ) => {
    setSelectedAnswers((prevAnswers) =>
      prevAnswers.map((section, index) =>
        index === sectionIndex
          ? [
              ...section.map((answer) =>
                answer.questionId === questionId
                  ? { ...answer, remark: newRemark }
                  : answer
              ),
            ]
          : [...section]
      )
    );
  };

  const updateCompliance = (
    sectionIndex: number,
    questionId: number,
    newCompliance: boolean
  ) => {
    setSelectedAnswers((prevAnswers) =>
      prevAnswers.map((section, index) =>
        index === sectionIndex
          ? [
              ...section.map((answer) =>
                answer.questionId === questionId
                  ? { ...answer, compliance: newCompliance }
                  : answer
              ),
            ]
          : [...section]
      )
    );
  };

  const [otherComments, setOtherComments] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [complianceDecision, setComplianceDecision] = useState<
    "Compliant" | "For-compliance" | "Non-compliant"
  >("Non-compliant");

  const onSubmit = async () => {
    if (
      inspectors.some((inspector) => inspector === "") ||
      inspectors.length < 1
    ) {
      alert("Please fill out all the inspectors");
      return;
    }

    const IMWPR: IMWPR = {
      inspection_team: inspectors,
      findings: selectedAnswers.flat(),
      other_comments: otherComments,
      recommendations: recommendations,
      compliance_decision: complianceDecision,
    };
    handleIMWPRSubmission(IMWPR);
  };

  return (
    <div className="h-full w-full bg-white border border-[#D5D7D8] flex flex-col rounded-[10px] p-6 gap-2">
      <h1 className="font-monts font-bold text-lg text-darkerGray underline">
        Inspection Task - IMWPR
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col space-y-4">
          <h6 className="font-monts font-semibold text-sm text-darkerGray">
            Inspection and monitoring team:
          </h6>
          <div className="w-full flex flex-row flex-wrap gap-2 justify-end">
            {inspectors.map((inspector: any, index: any) => {
              return (
                <div key={index} className="relative flex items-center w-full">
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={inspector}
                    onChange={(e) =>
                      handleInspectorChange(index, e.target.value)
                    }
                    className="text-[#7C7C7C] flex-1 border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block p-2.5 outline-none pr-6" // Added pr-6 to avoid overlap with the X button
                  />
                  {/* If inspectors == 1 dont show X */}
                  {inspectors.length > 1 && (
                    <button
                      onClick={() => removeInspector(index)}
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 py-1 px-2 font-monts font-semibold text-sm outline-none"
                      type="button"
                    >
                      <BsX color="red" size={20} />
                    </button>
                  )}
                </div>
              );
            })}
            <button
              onClick={addNewInspector}
              className="py-2 min-w-[20%] px-4 font-monts font-semibold text-sm text-white bg-[#3C6497] rounded-lg outline-none"
              type="button"
            >
              + Add another inspector/member
            </button>
          </div>
        </div>
        <hr className="w-full border-[#D5D7D8]"></hr>
        <div className="flex flex-col gap-5">
          <h6 className="font-monts font-semibold text-sm text-darkerGray">
            Findings and recommendations:
          </h6>
          {/* A. Department Head/Chair */}
          <Sections
            sectionId={0}
            title={"A. Department Head/Chair"}
            content={sectionA}
            selectedAnswers={selectedAnswers}
            updateRemark={updateRemark}
            updateCompliance={updateCompliance}
          />
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* B. Faculty */}
          <Sections
            sectionId={1}
            title={"B. Faculty"}
            content={sectionB}
            selectedAnswers={selectedAnswers}
            updateRemark={updateRemark}
            updateCompliance={updateCompliance}
          />
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* C. Curriculum and Instruction */}
          <Sections
            sectionId={2}
            title={"C. Curriculum and Instruction"}
            content={sectionC}
            selectedAnswers={selectedAnswers}
            updateRemark={updateRemark}
            updateCompliance={updateCompliance}
          />
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* D. Laboratory Facilities and Equipment */}
          <Sections
            sectionId={3}
            title={"D. Laboratory Facilities and Equipment"}
            content={sectionD}
            selectedAnswers={selectedAnswers}
            updateRemark={updateRemark}
            updateCompliance={updateCompliance}
          />
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* E. Library */}
          <Sections
            sectionId={4}
            title={"E. Library"}
            content={sectionE}
            selectedAnswers={selectedAnswers}
            updateRemark={updateRemark}
            updateCompliance={updateCompliance}
          />
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* F. Practicum */}
          <Sections
            sectionId={5}
            title={"F. Practicum"}
            content={sectionF}
            selectedAnswers={selectedAnswers}
            updateRemark={updateRemark}
            updateCompliance={updateCompliance}
          />
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* G. Research and Extension */}
          <Sections
            sectionId={6}
            title={"G. Research and Extension"}
            content={sectionG}
            selectedAnswers={selectedAnswers}
            updateRemark={updateRemark}
            updateCompliance={updateCompliance}
          />
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* H. Recruitment and Retention of Students */}
          <Sections
            sectionId={7}
            title={"H. Recruitment and Retention of Students"}
            content={sectionH}
            selectedAnswers={selectedAnswers}
            updateRemark={updateRemark}
            updateCompliance={updateCompliance}
          />
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* I. Performance in the Licensure Exam for the past five years */}
          <Sections
            sectionId={8}
            title={
              "I. Performance in the Licensure Exam for the past five years"
            }
            content={sectionI}
            selectedAnswers={selectedAnswers}
            updateRemark={updateRemark}
            updateCompliance={updateCompliance}
          />
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* J. Tracers Study of Alumni */}
          <Sections
            sectionId={9}
            title={"J. Tracers Study of Alumni"}
            content={sectionJ}
            selectedAnswers={selectedAnswers}
            updateRemark={updateRemark}
            updateCompliance={updateCompliance}
          />
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* K. Uniqueness of the BS ND Program */}
          <Sections
            sectionId={10}
            title={"K. Uniqueness of the BS ND Program"}
            content={sectionK}
            selectedAnswers={selectedAnswers}
            updateRemark={updateRemark}
            updateCompliance={updateCompliance}
          />
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* L. Challenges Encountered in the BS ND Program */}
          <Sections
            sectionId={11}
            title={"L. Challenges Encountered in the BS ND Program"}
            content={sectionL}
            selectedAnswers={selectedAnswers}
            updateRemark={updateRemark}
            updateCompliance={updateCompliance}
          />
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* M. Students’ Feedback */}
          <Sections
            sectionId={12}
            title={"M. Students' Feedback"}
            content={sectionM}
            selectedAnswers={selectedAnswers}
            updateRemark={updateRemark}
            updateCompliance={updateCompliance}
          />
        </div>
        <hr className="w-full border-[#D5D7D8]"></hr>
        <div className="flex flex-col gap-2">
          <h6 className="font-monts font-semibold text-sm text-darkerGray">
            Other comments:
          </h6>
          <textarea
            onChange={(e) => setOtherComments(e.target.value)}
            value={otherComments}
            rows={3}
            className="w-full text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
          />
          <h6 className="font-monts font-semibold text-sm text-darkerGray">
            Recommendations:
          </h6>
          <textarea
            rows={3}
            onChange={(e) => setRecommendations(e.target.value)}
            value={recommendations}
            className="w-full text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
          />
        </div>
        <hr className="w-full border-[#D5D7D8]"></hr>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h6 className="font-monts font-semibold text-sm text-darkerGray">
              IMWPR Summary:
            </h6>
            <Summary selectedAnswers={selectedAnswers} />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="font-monts font-semibold text-sm text-darkerGray">
              Compliance Decision:
            </h6>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center">
                <input
                  name={`item_compliance_forIssuance`}
                  id="compliance"
                  type="radio"
                  checked={complianceDecision === "Compliant"}
                  onChange={() => setComplianceDecision("Compliant")}
                  className="w-4 h-4 accent-primaryBlue"
                />
                <label
                  htmlFor="compliance"
                  className="ml-2 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                >
                  For issuance of Certificate of Compliance
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="monitoring"
                  type="radio"
                  checked={complianceDecision === "For-compliance"}
                  onChange={() => setComplianceDecision("For-compliance")}
                  className="w-4 h-4 accent-primaryBlue"
                />
                <label
                  htmlFor="monitoring"
                  className="ml-2 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                >
                  For monitoring/for-compliance
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="non-compliant"
                  type="radio"
                  checked={complianceDecision === "Non-compliant"}
                  onChange={() => setComplianceDecision("Non-compliant")}
                  className="w-4 h-4 accent-primaryBlue"
                />
                <label
                  htmlFor="non-compliant"
                  className="ml-2 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                >
                  Non-compliant
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full border-[#D5D7D8]"></hr>
        <div className="flex justify-end">
          <button
            className={`${
              isLoading ? "flex items-center gap-0.5" : ""
            } py-2 px-4 font-monts font-semibold text-sm text-white bg-[#3C6497] rounded-lg outline-none`}
            type="button"
            onClick={() => onSubmit()}
          >
            {isLoading ? (
              <>
                <Spinner />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

const sectionTexts = [
  "A. Department Head/Chair",
  "B. Faculty",
  "C. Curriculum and Instruction",
  "D. Laboratory Facilities and Equipment",
  "E. Library",
  "F. Practicum",
  "G. Research and Extension",
  "H. Recruitment and Retention of Students",
  "I. Performance in the Licensure Exam for the past five years",
  "J. Tracers Study of Alumni",
  "K. Uniqueness of the BS ND Program",
  "L. Challenges Encountered in the BS ND Program",
  "M. Students' Feedback",
];
