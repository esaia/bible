import React, { useContext } from "react";
import { BibleContext } from "../context/BibleProvide";

const useBibleContext = () => {
  const {
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
