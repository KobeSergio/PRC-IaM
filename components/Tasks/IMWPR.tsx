import React, { useState } from "react";
import Spinner from "../Spinner";

export default function IMWPR() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmitIMWPR = () => {
    //insert logic here
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionChange = (questionId: number, optionId: number) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: optionId,
    }));
  };

  const sectionA = [
    {
      id: 1,
      text: "The department head/chair is a Filipino citizen?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 2,
      text: "Nutrition and Dietetics degree holder and a registered nutritionist-dietitian (RND) with updated license?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 3,
      text: "Completed MS Nutrition/or other allied health and food related courses?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 4,
      text: "Completed at least three years of teaching experience related to nutrition and other allied health subjects?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 5,
      text: "Teaching load does not exceed 12 units? (Maximum load should not exceed 18 hours a week)",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
  ];

  const sectionB = [
    {
      id: 1,
      text: "Faculty are Filipino citizens? ",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 2,
      text: "Nutrition and Dietetics degree holder and a registered nutritionist-dietitian (RND) with updated license?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 3,
      text: "Completed MS Nutrition/or other allied health and food related courses?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 4,
      text: "Has at least two years working experience?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 5,
      text: "Has fringe benefits?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 6,
      text: "Part timers are given a maximum of 12 units teaching load only?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 7,
      text: "Members to the AIPO?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 8,
      text: "Faculty development?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
  ];

  const sectionC = [
    {
      id: 1,
      text: "Meets the minimum requirements prescribed in CMO No. 14, Series of 2017 for new program?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 2,
      text: "Meets the minimum requirements prescribed in CMO No. 14, Series of 2017 for new program?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
  ];

  const sectionD = [
    {
      id: 1,
      text: "Laboratories are adequate based on CMO 14 requirements? ",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 2,
      text: "Nutrition Clinic are adequate based on CMO 14 requirements? ",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
  ];

  const sectionE = [
    {
      id: 1,
      text: "The librarian/s is/are working full-time?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 2,
      text: "Library has its own staff?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 3,
      text: "References are updated?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
  ];

  const sectionF = [
    {
      id: 1,
      text: "Are the Internship/Practicum activities conducted in the area of hospital dietetics?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 2,
      text: "Are the Internship/Practicum activities conducted in the area of foodservices?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 3,
      text: "Are the Internship/Practicum activities conducted in the area of community/public health nutrition?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
  ];

  const sectionG = [
    {
      id: 1,
      text: "Researches are published? (State in the remarks published researches)",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 2,
      text: "Any extension work or university social responsibilities (USR)? (State in the remarks published researches)",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
  ];

  const sectionH = [
    {
      id: 1,
      text: "BS ND Program is marketed and promoted?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 2,
      text: "BS ND Students are retained?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 3,
      text: "There are BS ND Students? (State count in remarks)",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
  ];

  const sectionI = [
    {
      id: 1,
      text: "Did they perform in the licensure exam for the past five years? (State the scores they got)",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
  ];

  const sectionJ = [
    {
      id: 1,
      text: "Do they monitor alumni?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
  ];

  const sectionK = [
    {
      id: 1,
      text: "Does the establishment offer any unique material on BS ND Program? (State the material in remarks if any)",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
  ];

  const sectionL = [
    {
      id: 1,
      text: "Did the establishment face any challenges in the given program? (State the challenges encountered in remarks if any)",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
  ];

  const sectionM = [
    {
      id: 1,
      text: "Did the students from the establishment provided feedback regarding the given program? (State the feedback in the remarks if any)",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
  ];

  return (
    <div className="h-full lg:h-[45vh] bg-white border border-[#D5D7D8] flex flex-col rounded-[10px] p-6 gap-2">
      <h1 className="font-monts font-bold text-lg text-darkerGray underline">
        Inspection Task - IMWPR
      </h1>
      <form className="flex flex-col gap-4 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          <h6 className="font-monts font-semibold text-sm text-darkerGray">
            Inspection and monitoring team:
          </h6>
          <div className="w-full flex flex-row flex-wrap gap-2">
            <input
              type="text"
              id=""
              title="text"
              placeholder="John Doe"
              className="text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
            />
            <input
              type="text"
              id=""
              title="text"
              placeholder="John Doe"
              className="text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
            />
            <button
              className="py-2 px-4 font-monts font-semibold text-sm text-white bg-[#3C6497] rounded-lg outline-none"
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
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
                A. Department Head/Chair
              </h6>
              <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
                Remarks and recommendations
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {sectionA.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6"
                >
                  <div className="w-full md:w-3/5 flex flex-row">
                    <ul className="w-full pl-5 list-disc">
                      <li>
                        <h6 className="font-monts font-medium text-sm text-darkerGray">
                          {item.text}
                        </h6>
                      </li>
                    </ul>
                    <div className="w-2/5 flex flex-row justify-end gap-8">
                      {item.options.map((option: any) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-1 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`item_${item.id}`}
                            value={option.id}
                            className="w-4 h-4 accent-primaryBlue"
                            // checked={selectedAnswers[item.id] === option.id}
                            onChange={() =>
                              handleOptionChange(item.id, option.id)
                            }
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    id=""
                    rows={1}
                    title="text"
                    placeholder=""
                    className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* B. Faculty */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
                B. Faculty
              </h6>
              <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
                Remarks and recommendations
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {sectionB.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6"
                >
                  <div className="w-full md:w-3/5 flex flex-row">
                    <ul className="w-full pl-5 list-disc">
                      <li>
                        <h6 className="font-monts font-medium text-sm text-darkerGray">
                          {item.text}
                        </h6>
                      </li>
                    </ul>
                    <div className="w-2/5 flex flex-row justify-end gap-8">
                      {item.options.map((option: any) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-1 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`item_${item.id}`}
                            value={option.id}
                            className="w-4 h-4 accent-primaryBlue"
                            // checked={selectedAnswers[item.id] === option.id}
                            onChange={() =>
                              handleOptionChange(item.id, option.id)
                            }
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    id=""
                    rows={1}
                    title="text"
                    placeholder=""
                    className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* C. Curriculum and Instruction */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
                C. Curriculum and Instruction
              </h6>
              <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
                Remarks and recommendations
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {sectionC.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6"
                >
                  <div className="w-full md:w-3/5 flex flex-row">
                    <ul className="w-full pl-5 list-disc">
                      <li>
                        <h6 className="font-monts font-medium text-sm text-darkerGray">
                          {item.text}
                        </h6>
                      </li>
                    </ul>
                    <div className="w-2/5 flex flex-row justify-end gap-8">
                      {item.options.map((option: any) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-1 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`item_${item.id}`}
                            value={option.id}
                            className="w-4 h-4 accent-primaryBlue"
                            // checked={selectedAnswers[item.id] === option.id}
                            onChange={() =>
                              handleOptionChange(item.id, option.id)
                            }
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    id=""
                    rows={1}
                    title="text"
                    placeholder=""
                    className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* D. Laboratory Facilities and Equipment */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
                D. Laboratory Facilities and Equipment
              </h6>
              <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
                Remarks and recommendations
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {sectionD.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6"
                >
                  <div className="w-full md:w-3/5 flex flex-row">
                    <ul className="w-full pl-5 list-disc">
                      <li>
                        <h6 className="font-monts font-medium text-sm text-darkerGray">
                          {item.text}
                        </h6>
                      </li>
                    </ul>
                    <div className="w-2/5 flex flex-row justify-end gap-8">
                      {item.options.map((option: any) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-1 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`item_${item.id}`}
                            value={option.id}
                            className="w-4 h-4 accent-primaryBlue"
                            // checked={selectedAnswers[item.id] === option.id}
                            onChange={() =>
                              handleOptionChange(item.id, option.id)
                            }
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    id=""
                    rows={1}
                    title="text"
                    placeholder=""
                    className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* E. Library */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
                E. Library
              </h6>
              <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
                Remarks and recommendations
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {sectionE.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6"
                >
                  <div className="w-full md:w-3/5 flex flex-row">
                    <ul className="w-full pl-5 list-disc">
                      <li>
                        <h6 className="font-monts font-medium text-sm text-darkerGray">
                          {item.text}
                        </h6>
                      </li>
                    </ul>
                    <div className="w-2/5 flex flex-row justify-end gap-8">
                      {item.options.map((option: any) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-1 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`item_${item.id}`}
                            value={option.id}
                            className="w-4 h-4 accent-primaryBlue"
                            // checked={selectedAnswers[item.id] === option.id}
                            onChange={() =>
                              handleOptionChange(item.id, option.id)
                            }
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    id=""
                    rows={1}
                    title="text"
                    placeholder=""
                    className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* F. Practicum */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
                F. Practicum
              </h6>
              <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
                Remarks and recommendations
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {sectionF.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6"
                >
                  <div className="w-full md:w-3/5 flex flex-row">
                    <ul className="w-full pl-5 list-disc">
                      <li>
                        <h6 className="font-monts font-medium text-sm text-darkerGray">
                          {item.text}
                        </h6>
                      </li>
                    </ul>
                    <div className="w-2/5 flex flex-row justify-end gap-8">
                      {item.options.map((option: any) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-1 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`item_${item.id}`}
                            value={option.id}
                            className="w-4 h-4 accent-primaryBlue"
                            // checked={selectedAnswers[item.id] === option.id}
                            onChange={() =>
                              handleOptionChange(item.id, option.id)
                            }
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    id=""
                    rows={1}
                    title="text"
                    placeholder=""
                    className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* G. Research and Extension */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
                G. Research and Extension
              </h6>
              <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
                Remarks and recommendations
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {sectionG.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6"
                >
                  <div className="w-full md:w-3/5 flex flex-row">
                    <ul className="w-full pl-5 list-disc">
                      <li>
                        <h6 className="font-monts font-medium text-sm text-darkerGray">
                          {item.text}
                        </h6>
                      </li>
                    </ul>
                    <div className="w-2/5 flex flex-row justify-end gap-8">
                      {item.options.map((option: any) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-1 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`item_${item.id}`}
                            value={option.id}
                            className="w-4 h-4 accent-primaryBlue"
                            // checked={selectedAnswers[item.id] === option.id}
                            onChange={() =>
                              handleOptionChange(item.id, option.id)
                            }
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    id=""
                    rows={1}
                    title="text"
                    placeholder=""
                    className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* H. Recruitment and Retention of Students */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
                H. Recruitment and Retention of Students
              </h6>
              <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
                Remarks and recommendations
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {sectionH.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6"
                >
                  <div className="w-full md:w-3/5 flex flex-row">
                    <ul className="w-full pl-5 list-disc">
                      <li>
                        <h6 className="font-monts font-medium text-sm text-darkerGray">
                          {item.text}
                        </h6>
                      </li>
                    </ul>
                    <div className="w-2/5 flex flex-row justify-end gap-8">
                      {item.options.map((option: any) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-1 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`item_${item.id}`}
                            value={option.id}
                            className="w-4 h-4 accent-primaryBlue"
                            // checked={selectedAnswers[item.id] === option.id}
                            onChange={() =>
                              handleOptionChange(item.id, option.id)
                            }
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    id=""
                    rows={1}
                    title="text"
                    placeholder=""
                    className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* I. Performance in the Licensure Exam for the past five years */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
                I. Performance in the Licensure Exam for the past five years
              </h6>
              <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
                Remarks and recommendations
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {sectionI.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6"
                >
                  <div className="w-full md:w-3/5 flex flex-row">
                    <ul className="w-full pl-5 list-disc">
                      <li>
                        <h6 className="font-monts font-medium text-sm text-darkerGray">
                          {item.text}
                        </h6>
                      </li>
                    </ul>
                    <div className="w-2/5 flex flex-row justify-end gap-8">
                      {item.options.map((option: any) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-1 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`item_${item.id}`}
                            value={option.id}
                            className="w-4 h-4 accent-primaryBlue"
                            // checked={selectedAnswers[item.id] === option.id}
                            onChange={() =>
                              handleOptionChange(item.id, option.id)
                            }
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    id=""
                    rows={1}
                    title="text"
                    placeholder=""
                    className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* J. Tracers Study of Alumni */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
                J. Tracers Study of Alumni
              </h6>
              <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
                Remarks and recommendations
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {sectionJ.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6"
                >
                  <div className="w-full md:w-3/5 flex flex-row">
                    <ul className="w-full pl-5 list-disc">
                      <li>
                        <h6 className="font-monts font-medium text-sm text-darkerGray">
                          {item.text}
                        </h6>
                      </li>
                    </ul>
                    <div className="w-2/5 flex flex-row justify-end gap-8">
                      {item.options.map((option: any) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-1 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`item_${item.id}`}
                            value={option.id}
                            className="w-4 h-4 accent-primaryBlue"
                            // checked={selectedAnswers[item.id] === option.id}
                            onChange={() =>
                              handleOptionChange(item.id, option.id)
                            }
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    id=""
                    rows={1}
                    title="text"
                    placeholder=""
                    className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* K. Uniqueness of the BS ND Program */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
                K. Uniqueness of the BS ND Program
              </h6>
              <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
                Remarks and recommendations
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {sectionK.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6"
                >
                  <div className="w-full md:w-3/5 flex flex-row">
                    <ul className="w-full pl-5 list-disc">
                      <li>
                        <h6 className="font-monts font-medium text-sm text-darkerGray">
                          {item.text}
                        </h6>
                      </li>
                    </ul>
                    <div className="w-2/5 flex flex-row justify-end gap-8">
                      {item.options.map((option: any) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-1 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`item_${item.id}`}
                            value={option.id}
                            className="w-4 h-4 accent-primaryBlue"
                            // checked={selectedAnswers[item.id] === option.id}
                            onChange={() =>
                              handleOptionChange(item.id, option.id)
                            }
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    id=""
                    rows={1}
                    title="text"
                    placeholder=""
                    className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* L. Challenges Encountered in the BS ND Program */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
                L. Challenges Encountered in the BS ND Program
              </h6>
              <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
                Remarks and recommendations
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {sectionL.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6"
                >
                  <div className="w-full md:w-3/5 flex flex-row">
                    <ul className="w-full pl-5 list-disc">
                      <li>
                        <h6 className="font-monts font-medium text-sm text-darkerGray">
                          {item.text}
                        </h6>
                      </li>
                    </ul>
                    <div className="w-2/5 flex flex-row justify-end gap-8">
                      {item.options.map((option: any) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-1 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`item_${item.id}`}
                            value={option.id}
                            className="w-4 h-4 accent-primaryBlue"
                            // checked={selectedAnswers[item.id] === option.id}
                            onChange={() =>
                              handleOptionChange(item.id, option.id)
                            }
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    id=""
                    rows={1}
                    title="text"
                    placeholder=""
                    className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full border-[#D5D7D8]"></hr>
          {/* M. Students’ Feedback */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
                M. Students&apos; Feedback
              </h6>
              <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
                Remarks and recommendations
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {sectionM.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-6"
                >
                  <div className="w-full md:w-3/5 flex flex-row">
                    <ul className="w-full pl-5 list-disc">
                      <li>
                        <h6 className="font-monts font-medium text-sm text-darkerGray">
                          {item.text}
                        </h6>
                      </li>
                    </ul>
                    <div className="w-2/5 flex flex-row justify-end gap-8">
                      {item.options.map((option: any) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-1 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`item_${item.id}`}
                            value={option.id}
                            className="w-4 h-4 accent-primaryBlue"
                            // checked={selectedAnswers[item.id] === option.id}
                            onChange={() =>
                              handleOptionChange(item.id, option.id)
                            }
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    id=""
                    rows={1}
                    title="text"
                    placeholder=""
                    className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="w-full border-[#D5D7D8]"></hr>
        <div className="flex flex-col gap-2">
          <h6 className="font-monts font-semibold text-sm text-darkerGray">
            Other comments:
          </h6>
          <textarea
            id=""
            rows={3}
            title="text"
            placeholder=""
            className="w-full text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
          />
          <h6 className="font-monts font-semibold text-sm text-darkerGray">
            Recommendations:
          </h6>
          <textarea
            id=""
            rows={3}
            title="text"
            placeholder=""
            className="w-full text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
          />
        </div>
        <hr className="w-full border-[#D5D7D8]"></hr>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h6 className="font-monts font-semibold text-sm text-darkerGray">
              IMWPR Summary:
            </h6>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-24">
              <div className="flex flex-col gap-2">
                <p className="font-monts font-semibold text-sm text-darkerGray">
                  A. Department Head/Chair:{" "}
                  <span className="font-medium">0/5</span>
                </p>
                <p className="font-monts font-semibold text-sm text-darkerGray">
                  B. Faculty: <span className="font-medium">0/9</span>
                </p>
                <p className="font-monts font-semibold text-sm text-darkerGray">
                  C. Curriculum and Instruction:{" "}
                  <span className="font-medium">0/2</span>
                </p>
                <p className="font-monts font-semibold text-sm text-darkerGray">
                  D. Laboratory facilities and Equipment:{" "}
                  <span className="font-medium">0/2</span>
                </p>
                <p className="font-monts font-semibold text-sm text-darkerGray">
                  E. Library: <span className="font-medium">0/3</span>
                </p>
                <p className="font-monts font-semibold text-sm text-darkerGray">
                  F. Practicum: <span className="font-medium">0/3</span>
                </p>
                <p className="font-monts font-semibold text-sm text-darkerGray">
                  G. Research and Extension:{" "}
                  <span className="font-medium">0/2</span>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-monts font-semibold text-sm text-darkerGray">
                  H. Recruitment and Retention of Students:{" "}
                  <span className="font-medium">0/3</span>
                </p>
                <p className="font-monts font-semibold text-sm text-darkerGray">
                  I. Performance in the Licensure Exam for the past five years:{" "}
                  <span className="font-medium">0/1</span>
                </p>
                <p className="font-monts font-semibold text-sm text-darkerGray">
                  J. Tracers study of alumni:{" "}
                  <span className="font-medium">0/1</span>
                </p>
                <p className="font-monts font-semibold text-sm text-darkerGray">
                  K. Uniqueness of the BS ND Program:{" "}
                  <span className="font-medium">0/1</span>
                </p>
                <p className="font-monts font-semibold text-sm text-darkerGray">
                  L. Challenges encountered in the BS ND Program:{" "}
                  <span className="font-medium">0/1</span>
                </p>
                <p className="font-monts font-semibold text-sm text-darkerGray">
                  M. Students&apos; feedback:{" "}
                  <span className="font-medium">0/1</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="font-monts font-semibold text-sm text-darkerGray">
              Compliance Decision:
            </h6>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center">
                <input
                  id="compliance"
                  type="radio"
                  value=""
                  name="default-radio"
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
                  checked
                  id="monitoring"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 accent-primaryBlue"
                />
                <label
                  htmlFor="monitoring"
                  className="ml-2 font-monts font-medium text-sm text-darkerGray cursor-pointer"
                >
                  For monitoring/re-inspection
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked
                  id="non-compliant"
                  type="radio"
                  value=""
                  name="default-radio"
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
            onClick={handleSubmitIMWPR}
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
      </form>
    </div>
  );
}
