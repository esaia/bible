import { useContext } from "react";
import { BibleContext } from "../context/BibleProvide";

const useBibleContext = () => {
  const {
    filteredData,
    setfilteredData,
    versions,
    setVersions,
    result,
    setResult,
    isLanguage,
    setIsLanguage,
    inputValues,
    inputDispatch,
    onSave,
    isLoadingResult,
  } = useContext(BibleContext);

  return {
    filteredData,
    setfilteredData,
    versions,
    setVersions,
    result,
    setResult,
    isLanguage,
    setIsLanguage,
    inputValues,
    inputDispatch,
    onSave,
    isLoadingResult,
  };
};

export default useBibleContext;
