import React from "react";
import useBibleContext from "../../hooks/useBibleContext";

const FontSize = () => {
  const { inputValues, inputDispatch } = useBibleContext();

  return (
    <div className="w-72">
      <label
        htmlFor="minmax-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Font Size: {inputValues.fontSize}
      </label>

      <input
        id="minmax-range"
        type="range"
        min="2"
        max="9"
        value={inputValues.fontSize}
        onChange={(e) =>
          inputDispatch({ type: "CHANGE_FONT_SIZE", payload: +e.target.value })
        }
        className="range w-full cursor-pointer"
        step="1"
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span className="dark:text-white">|</span>
        <span className="dark:text-white">|</span>
        <span className="dark:text-white">|</span>
        <span className="dark:text-white">|</span>
        <span className="dark:text-white">|</span>
        <span className="dark:text-white">|</span>
        <span className="dark:text-white">|</span>
        <span className="dark:text-white">|</span>
      </div>
    </div>
  );
};

export default FontSize;
