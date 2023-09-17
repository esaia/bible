import React from "react";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
import useData from "../hooks/useData";
import useBibleContext from "../hooks/useBibleContext";
import { useSearchParams } from "react-router-dom";

const VerseArrows = ({ inputValues, onSave }) => {
  const { filteredData, inputDispatch, isLoadingResult } = useBibleContext();
  const { verse } = useData();

  const [searchParams, setSearchParams] = useSearchParams();

  const left = () => {
    inputDispatch({ type: "DECREASE_VERSE" });
    searchParams.delete("verse");
    searchParams.append("verse", inputValues.verse - 1);
    searchParams.sort();
    setSearchParams(searchParams);
  };

  const right = () => {
    if (inputValues.verse === verse[verse.length - 1].value) {
      return;
    }
    searchParams.delete("verse");
    searchParams.append("verse", inputValues.verse + 1);
    searchParams.sort();
    setSearchParams(searchParams);

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
            className="bg-gray-200 w-20 rounded-sm px-3 cursor-pointer text-black dark:text-gray-200  dark:bg-[#374151] hover:bg-gray-400 hover:dark:bg-[#282f3b]"
            onClick={() => onSave()}
            disabled={isLoadingResult}
          >
            {isLoadingResult ? "Wait..." : "Show"}
          </button>
        </div>
      )}
    </div>
  );
};

export default VerseArrows;
