import React, { createContext, useContext, useState } from 'react';
import useBibleContext from '../hooks/useBibleContext';
import { useQueryClient } from 'react-query';
import { fetchData } from '../lib/axios';

const bibleSettingContext = createContext();

const BibleSettingProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const { inputValues } = useBibleContext();

  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') === 'true');
  const [fontTitle, setFontTitle] = useState(() => localStorage.getItem('font') || 'font-banner');

  const [versions, setVersions] = useState(JSON.parse(localStorage.getItem('versions')));

  const params = {
    w: inputValues?.book,
    t: inputValues?.chapter,
    m: '',
    s: inputValues?.phrase,
    mv: inputValues?.version || '',
    language: inputValues?.language,
    page: 1,
  };

  const onSave = async () => {
    const keyGeo = ['geoData', params?.w, inputValues?.chapter, versions?.geo];
    const keyEng = ['engData', params?.w, inputValues?.chapter, versions?.eng];
    const keyRus = ['rusData', params?.w, inputValues?.chapter, versions?.eng];
    const queryDataGeo = queryClient.getQueryData(keyGeo);
    const queryDataEng = queryClient.getQueryData(keyEng);
    const queryDataRus = queryClient.getQueryData(keyRus);

    const startIndex = inputValues.verse - 1;
    const endIndex = inputValues.versemde || inputValues.verse;

    const requestManagement = JSON.parse(localStorage.getItem('requestManagement'));

    if (!requestManagement?.geo && !requestManagement?.eng && !requestManagement?.rus) {
      return;
    }

    const englishBooks = {
      45: 59,
      46: 60,
      47: 61,
      48: 62,
      49: 63,
      50: 64,
      51: 65,
      52: 45,
      53: 46,
      54: 47,
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
    };

    const booksForEnglishLang = {
      59: 45,
      60: 46,
      61: 47,
      62: 48,
      63: 49,
      64: 50,
      65: 51,
      45: 52,
      46: 53,
      47: 54,
      48: 55,
      49: 56,
      50: 57,
      51: 58,
      52: 59,
      53: 60,
      54: 61,
      55: 62,
      56: 63,
      57: 64,
      58: 65,
    };

    let geoBook = booksForEnglishLang[inputValues.book] || inputValues.book;

    const isEngLang = inputValues.language === 'eng';

    let preparedData = { geo: [], eng: [], rus: [] };

    if (!queryDataGeo) {
      if (requestManagement?.geo) {
        const dataGeo = await queryClient.fetchQuery({
          queryKey: keyGeo,
          queryFn: () =>
            fetchData({
              ...params,
              language: 'geo',
              w: !isEngLang ? params.w : geoBook,
              t: inputValues.chapter,
              mv: versions.geo,
            }),
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

    let englishBook = englishBooks[inputValues.book] || inputValues.book;

    if (!queryDataEng) {
      if (requestManagement?.eng) {
        const dataEng = await queryClient.fetchQuery({
          queryKey: keyEng,
          queryFn: () =>
            fetchData({
              ...params,
              language: 'eng',
              w: isEngLang ? params.w : englishBook,
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
          queryFn: () =>
            fetchData({
              ...params,
              language: 'rus',
              w: !isEngLang ? params.w : geoBook,
              t: inputValues.chapter,
              mv: versions.rus,
            }),
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
        fontTitle,
        setFontTitle,
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
