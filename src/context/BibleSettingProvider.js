import React, { createContext, useContext, useEffect, useState } from 'react';
import useBibleContext from '../hooks/useBibleContext';
import { useQuery, useQueryClient } from 'react-query';
import { fetchData } from '../lib/axios';

const bibleSettingContext = createContext();

const BibleSettingProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const { inputValues } = useBibleContext();

  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') === 'true');

  const [versions, setVersions] = useState(
    JSON.parse(localStorage.getItem('versions')) || {
      geo: 'ახალი გადამუშავებული გამოცემა 2015',
      eng: 'KJV King James Version',
      rus: 'Синодальный перевод',
    },
  );

  const params = {
    w: inputValues.book,
    t: inputValues.chapter,
    m: '',
    s: inputValues.phrase,
    mv: inputValues.version || '',
    language: inputValues.language,
    page: 1,
  };

  const onSave = async () => {
    const keyGeo = ['geoData', params.w, inputValues.chapter, versions.geo];
    const keyEng = ['engData', params.w, inputValues.chapter, versions.eng];
    const keyRus = ['rusData', params.w, inputValues.chapter, versions.eng];
    const queryDataGeo = queryClient.getQueryData(keyGeo);
    const queryDataEng = queryClient.getQueryData(keyEng);
    const queryDataRus = queryClient.getQueryData(keyRus);

    const startIndex = inputValues.verse - 1;
    const endIndex = inputValues.versemde || inputValues.verse;

    const requestManagement = JSON.parse(localStorage.getItem('requestManagement'));

    if (!requestManagement?.geo && !requestManagement?.eng && !requestManagement?.rus) {
      return;
    }

    let preparedData = { geo: [], eng: [], rus: [] };

    if (!queryDataGeo) {
      if (requestManagement?.geo) {
        const dataGeo = await queryClient.fetchQuery({
          queryKey: keyGeo,
          queryFn: () => fetchData({ ...params, language: 'geo', t: inputValues.chapter, mv: versions.geo }),
        });

        if (dataGeo) {
          preparedData = {
            ...preparedData,
            geo: dataGeo?.bibleData?.slice(startIndex, endIndex),
          };
        }
      }
    } else {
      preparedData = {
        ...preparedData,
        geo: queryDataGeo.bibleData.slice(startIndex, endIndex),
      };
    }

    const englishBooks = {
      48: 62,
      49: 63,
      50: 64,
      51: 65,
      52: 66,
      53: 67,
      54: 68,
      55: 48,
      56: 49,
      57: 50,
      58: 51,
      59: 52,
      60: 53,
      61: 54,
      62: 55,
      63: 56,
      64: 57,
      65: 58,
      66: 59,
      67: 60,
      68: 61,
    };

    let englishBook = englishBooks[inputValues.book] || null;

    if (!queryDataEng) {
      if (requestManagement?.eng) {
        const dataEng = await queryClient.fetchQuery({
          queryKey: keyEng,
          queryFn: () =>
            fetchData({
              ...params,
              language: 'eng',
              w: englishBook || inputValues.book,
              t: inputValues.chapter,
              mv: versions.eng,
            }),
        });

        if (dataEng) {
          preparedData = {
            ...preparedData,
            eng: dataEng?.bibleData?.slice(startIndex, endIndex),
          };
        }
      }
    } else {
      preparedData = {
        ...preparedData,
        eng: queryDataEng.bibleData.slice(startIndex, endIndex),
      };
    }

    if (!queryDataRus) {
      if (requestManagement?.rus) {
        const dataRus = await queryClient.fetchQuery({
          queryKey: keyRus,
          queryFn: () => fetchData({ ...params, language: 'ru', t: inputValues.chapter, mv: versions.rus }),
        });

        if (dataRus) {
          preparedData = {
            ...preparedData,
            rus: dataRus?.bibleData?.slice(startIndex, endIndex),
          };
        }
      }
    } else {
      preparedData = {
        ...preparedData,
        rus: queryDataRus.bibleData.slice(startIndex, endIndex),
      };
    }

    localStorage.setItem('showData', JSON.stringify(preparedData));
  };

  return (
    <bibleSettingContext.Provider
      value={{
        darkMode,
        setDarkMode,
        versions,
        setVersions,
        onSave,
      }}
    >
      {children}
    </bibleSettingContext.Provider>
  );
};

export const useBibleSettingContext = () => {
  const data = useContext(bibleSettingContext);
  return data;
};

export default BibleSettingProvider;
