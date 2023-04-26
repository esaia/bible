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
  };
};

export default useBibleContext;
