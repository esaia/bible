import React, { useContext } from "react";
import { BibleContext } from "../context/BibleProvide";

const useBibleContext = () => {
  const {
    isDarkMode,
    originalData,
    setoriginalData,
    filteredData,
    setfilteredData,
    result,
    setResult,
  } = useContext(BibleContext);

  return {
    isDarkMode,
    originalData,
    setoriginalData,
    filteredData,
    setfilteredData,
    result,
    setResult,
  };
};

export default useBibleContext;
