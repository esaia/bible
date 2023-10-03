import React, { useState } from "react";

const FontSize = () => {
  const [fontSize, setFontSize] = useState(
    localStorage.getItem("fontSize") || 4
  );

  const changeFontSize = (e) => {
    localStorage.setItem("fontSize", +e.target.value);
    setFontSize(+e.target.value);
  };
  return (
    <div className="w-72">
      <label
        htmlFor="minmax-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Font Size: {fontSize}
      </label>

      <input
        id="minmax-range"
        type="range"
        min="2"
        max="9"
        value={fontSize}
        onChange={(e) => changeFontSize(e)}
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
