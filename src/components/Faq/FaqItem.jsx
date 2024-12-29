/* eslint-disable react/prop-types */

import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const { question, content } = item;

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccording = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-3 md:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccording}
      >
        <h4 className="text-[16px] leading-7 md:text-[22px] md:leading-8 text-headingColor">
          {question}
        </h4>
        <div
          className={`${isOpen && "bg-primaryColor text-white border-none"} w-7 h-7 md:w-8 md:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}
        >
          {isOpen? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && <div className="mt-4">
        <p className="text-[14px] leading-6 md:text-[16px] md:leading-7 font-[200] text-textColor">{content}</p>
        </div>}
    </div>
  );
};

export default FaqItem;
