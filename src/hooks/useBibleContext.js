import React, { useContext } from "react";
import { BibleContext } from "../context/BibleProvide";

const useBibleContext = () => {
  const {
    isDarkMode,
    setisDarkMode,
    filteredData,
    setfilteredData,
    result,
    setResult,
    isLanguage,
    setIsLanguage,
    inputValues,
    inputDispatch,
  } = useContext(BibleContext);

  return {
    isDarkMode,
    setisDarkMode,
    filteredData,
    setfilteredData,
    result,
    setResult,
    isLanguage,
    setIsLanguage,
    inputValues,
    inputDispatch,
  };
};

export default useBibleContext;
