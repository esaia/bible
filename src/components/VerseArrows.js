import React from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
import useData from "../hooks/useData";
import useBibleContext from "../hooks/useBibleContext";

const VerseArrows = ({ inputValues, onSave }) => {
  const { filteredData, inputDispatch } = useBibleContext();
  const { verse } = useData();
  const left = () => {
    inputDispatch({ type: "DECREASE_VERSE" });
  };

  const right = () => {
    if (inputValues.verse == verse[verse.length - 1].value) {
      return;
    }
    inputDispatch({ type: "INCREASE_VERSE" });
  };

  return (
    <div className="w-full flex justify-end items-center  select-none">
      {filteredData.bibleData.length === 1 && (
        <div className=" flex justify-end gap-3">
          <TiArrowLeftThick
            className="text-3xl cursor-pointer text-gray-300 dark:text-[#374151] hover:text-gray-500 hover:dark:text-[#282f3b]"
            onClick={left}
          />
          <TiArrowRightThick
            className="text-3xl cursor-pointer text-gray-300 dark:text-[#374151] hover:text-gray-500 hover:dark:text-[#282f3b]"
            onClick={right}
          />

          <button
            className="bg-gray-200 rounded-sm px-3 cursor-pointer text-black dark:text-gray-200  dark:bg-[#374151] hover:bg-gray-400 hover:dark:bg-[#282f3b]"
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
