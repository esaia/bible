import { useContext } from 'react';
import { BibleContext } from '../context/InputValuesProvider';

const useBibleContext = () => {
  const {
    filteredData,
    setfilteredData,
    versions,
    setVersions,
    result,
    setResult,
    isLanguage,

    inputValues,
    inputDispatch,
    isFetching,
    refetch,
  } = useContext(BibleContext);

  return {
    filteredData,
    setfilteredData,
    versions,
    setVersions,
    result,
    setResult,
    isLanguage,

    inputValues,
    inputDispatch,
    isFetching,
    refetch,
  };
};

export default useBibleContext;
