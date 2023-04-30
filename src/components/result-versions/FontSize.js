import React, { useEffect, useState } from "react";
import useData from "../../hooks/useData";
import useBibleContext from "../../hooks/useBibleContext";

const FontSize = () => {
  const { isLanguage, inputValues, inputDispatch } = useBibleContext();
  const { fontSizes } = useData();
  const [fontSize, setFontSize] = useState(
    +JSON.parse(localStorage.getItem("fontSize")) || 5
  );

  useEffect(() => {
    localStorage.setItem("languages", JSON.stringify(isLanguage));
  }, [isLanguage, fontSize]);

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
