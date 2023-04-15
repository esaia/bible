import React from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const VerseArrows = ({
  inputValues,
  filteredData,
  setInputValues,
  originalData,
  onSave,
}) => {
  const left = () => {
    if (inputValues.verse === 1) {
      return;
    }
    setInputValues({
      ...inputValues,
      verse: +inputValues.verse - 1,
    });
  };

  const right = (save) => {
    if (inputValues.verse === originalData.bibleData.length) {
      return;
    }
    setInputValues({
      ...inputValues,
      verse: +inputValues.verse + 1,
    });
  };

  return (
    <div className="w-full flex justify-end items-center">
      {filteredData.bibleData.length === 1 && (
        <div className=" flex justify-end gap-3">
          <BsArrowLeftSquareFill
            className="text-3xl cursor-pointer rounded-md bg-white  dark:text-[#374151] hover:text-gray-700 dark:hover:text-gray-500 "
            onClick={left}
          />
          <BsArrowRightSquareFill
            className="text-3xl cursor-pointer rounded-md  bg-white  dark:text-[#374151] hover:text-gray-700 dark:hover:text-gray-500"
            onClick={right}
          />
          <button
            className="bg-black text-white px-3 rounded-md dark:text-white  dark:bg-[#374151] hover:bg-gray-700 dark:hover:bg-gray-500"
            onClick={() => onSave()}
          >
            Show
          </button>
        </div>
      )}
    </div>
  );
};

export default VerseArrows;
