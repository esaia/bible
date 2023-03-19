import React, { useContext } from "react";
import { BibleContext } from "../context/BibleProvide";

const useBibleContext = () => {
  const {
    isDarkMode,
    setisDarkMode,
    originalData,
    setoriginalData,
    filteredData,
    setfilteredData,
    result,
    setResult,
    isLanguage,
    setIsLanguage,
    fontSize,
    setFontSize,
  } = useContext(BibleContext);

  return {
    isDarkMode,
    setisDarkMode,
    originalData,
    setoriginalData,
    filteredData,
    setfilteredData,
    result,
    setResult,
    isLanguage,
    setIsLanguage,
    fontSize,
    setFontSize,
  };
};

export default useBibleContext;
