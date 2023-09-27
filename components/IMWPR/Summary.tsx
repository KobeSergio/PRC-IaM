import React from "react";

export default function Summary({ selectedAnswers }: { selectedAnswers: any }) {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-24">
      <div className="flex flex-col gap-2">
        <p
          className={`font-monts font-semibold text-sm ${
            selectedAnswers[0]?.filter((answer: any) => answer.compliance)
              .length == 5
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          A. Department Head/Chair:{" "}
          <span className="font-medium">
            {
              selectedAnswers[0]?.filter((answer: any) => answer.compliance)
                .length
            }
            /5
          </span>
        </p>
        <p
          className={`font-monts font-semibold text-sm ${
            selectedAnswers[1]?.filter((answer: any) => answer.compliance)
              .length == 8
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          B. Faculty:{" "}
          <span className="font-medium">
            {
              selectedAnswers[1]?.filter((answer: any) => answer.compliance)
                .length
            }
            /8
          </span>
        </p>
        <p
          className={`font-monts font-semibold text-sm ${
            selectedAnswers[2]?.filter((answer: any) => answer.compliance)
              .length == 2
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          C. Curriculum and Instruction:{" "}
          <span className="font-medium">
            {
              selectedAnswers[2]?.filter((answer: any) => answer.compliance)
                .length
            }
            /2
          </span>
        </p>
        <p
          className={`font-monts font-semibold text-sm ${
            selectedAnswers[3]?.filter((answer: any) => answer.compliance)
              .length == 2
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          D. Laboratory facilities and Equipment:{" "}
          <span className="font-medium">
            {
              selectedAnswers[3]?.filter((answer: any) => answer.compliance)
                .length
            }
            /2
          </span>
        </p>
        <p
          className={`font-monts font-semibold text-sm ${
            selectedAnswers[4]?.filter((answer: any) => answer.compliance)
              .length == 3
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          E. Library:{" "}
          <span className="font-medium">
            {
              selectedAnswers[4]?.filter((answer: any) => answer.compliance)
                .length
            }
            /3
          </span>
        </p>
        <p
          className={`font-monts font-semibold text-sm ${
            selectedAnswers[5]?.filter((answer: any) => answer.compliance)
              .length == 3
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          F. Practicum:{" "}
          <span className="font-medium">
            {
              selectedAnswers[5]?.filter((answer: any) => answer.compliance)
                .length
            }
            /3
          </span>
        </p>
        <p
          className={`font-monts font-semibold text-sm ${
            selectedAnswers[6]?.filter((answer: any) => answer.compliance)
              .length == 2
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          G. Research and Extension:{" "}
          <span className="font-medium">
            {
              selectedAnswers[6]?.filter((answer: any) => answer.compliance)
                .length
            }
            /2
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p
          className={`font-monts font-semibold text-sm ${
            selectedAnswers[7]?.filter((answer: any) => answer.compliance)
              .length == 3
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          H. Recruitment and Retention of Students:{" "}
          <span className="font-medium">
            {
              selectedAnswers[7]?.filter((answer: any) => answer.compliance)
                .length
            }
            /3
          </span>
        </p>
        <p
          className={`font-monts font-semibold text-sm ${
            selectedAnswers[8]?.filter((answer: any) => answer.compliance)
              .length == 1
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          I. Performance in the Licensure Exam for the past five years:{" "}
          <span className="font-medium">
            {
              selectedAnswers[8]?.filter((answer: any) => answer.compliance)
                .length
            }
            /1
          </span>
        </p>
        <p
          className={`font-monts font-semibold text-sm ${
            selectedAnswers[9]?.filter((answer: any) => answer.compliance)
              .length == 1
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          J. Tracers study of alumni:{" "}
          <span className="font-medium">
            {
              selectedAnswers[9]?.filter((answer: any) => answer.compliance)
                .length
            }
            /1
          </span>
        </p>
        <p
          className={`font-monts font-semibold text-sm ${
            selectedAnswers[10]?.filter((answer: any) => answer.compliance)
              .length == 1
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          K. Uniqueness of the BS ND Program:{" "}
          <span className="font-medium">
            {
              selectedAnswers[10]?.filter((answer: any) => answer.compliance)
                .length
            }
            /1
          </span>
        </p>
        <p
          className={`font-monts font-semibold text-sm ${
            selectedAnswers[11]?.filter((answer: any) => answer.compliance)
              .length == 1
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          L. Challenges encountered in the BS ND Program:{" "}
          <span className="font-medium">
            {
              selectedAnswers[11]?.filter((answer: any) => answer.compliance)
                .length
            }
            /1
          </span>
        </p>
        <p
          className={`font-monts font-semibold text-sm ${
            selectedAnswers[12]?.filter((answer: any) => answer.compliance)
              .length == 1
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          M. Students&apos; feedback:{" "}
          <span className="font-medium">
            {
              selectedAnswers[12]?.filter((answer: any) => answer.compliance)
                .length
            }
            /1
          </span>
        </p>
      </div>
    </div>
  );
}
