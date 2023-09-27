type section = {
  id: number;
  text: string;
  options: Array<{ id: number; text: string }>;
};

export default function Sections({
  sectionId,
  selectedAnswers,
  title,
  content,
  updateRemark,
  updateCompliance,
}: {
  sectionId: number;
  title: string;
  selectedAnswers: any;
  content: any;
  updateRemark: (
    sectionIndex: number,
    questionId: number,
    newRemark: string
  ) => void;
  updateCompliance: (
    sectionIndex: number,
    questionId: number,
    newCompliance: boolean
  ) => void;
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-row gap-4">
        <h6 className="w-3/5 font-monts font-semibold text-sm text-darkerGray">
          {title}
        </h6>
        <h6 className="hidden md:flex w-2/5 font-monts font-semibold text-sm text-darkerGray">
          Remarks and recommendations
        </h6>
      </div>
      <div className="flex flex-col gap-2">
        {content.map((item: any) => (
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
                      name={`item_${sectionId}_${item.id}`}
                      value={option.id}
                      className="w-4 h-4 accent-primaryBlue"
                      defaultChecked={option.id === 2} // Default to "No"
                      checked={
                        selectedAnswers[sectionId].find(
                          (answer: any) => answer.questionId === item.id
                        )?.compliance
                          ? option.id === 1
                          : option.id === 2
                      }
                      onChange={() =>
                        updateCompliance(sectionId, item.id, option.value)
                      }
                    />
                    {option.text}
                  </label>
                ))}
              </div>
            </div>
            <textarea
              rows={1}
              value={
                //Find the remark of the selected answer based from the questionId
                selectedAnswers[sectionId].find((answer: any) => {
                  answer.questionId == item.id;
                })?.remark
              }
              onChange={(e) => {
                updateRemark(sectionId, item.id, e.target.value);
              }}
              className="w-full md:w-2/5 text-[#7C7C7C] border border-[#D5D7D8] rounded-[8px] font-monts font-medium text-[14px] leading-[20px] block  p-2.5 outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
