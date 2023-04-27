import React, { useContext } from "react";
import { BibleContext } from "../context/BibleProvide";

const useData = () => {
  const { filteredData } = useContext(BibleContext);

  //   For preview
  const languages = [
    {
      value: "geo",
      label: "geo",
      id: "language",
    },
    {
      value: "eng",
      label: "eng",
      id: "language",
    },
    {
      value: "russian",
      label: "rus",
      id: "language",
    },
  ];
  const versions = filteredData?.versions?.map((item, i) => {
    return { value: item, label: item, id: "version" };
  });

  const bible = filteredData?.bibleNames
    ?.map((item, i) => {
      return { value: i + 1, label: item, id: "book" };
    })
    .slice(0, 3);

  const oldTest = filteredData?.bibleNames
    ?.map((item, i) => {
      return { value: i + 1, label: item, id: "book" };
    })
    .slice(3, 42);

  const newTest = filteredData?.bibleNames
    ?.map((item, i) => {
      return { value: i + 1, label: item, id: "book" };
    })
    .slice(42, 69);

  const book = [
    {
      label: "ბიბლია",
      options: bible,
    },
    {
      label: "ძველი აღთქმა",
      options: oldTest,
    },
    {
      label: "ახალი აღთქმა",
      options: newTest,
    },
  ];
  const chapter =
    filteredData?.tavi &&
    new Array(+filteredData?.tavi[0].cc)?.fill()?.map((_, i) => {
      return { value: i + 1, label: i + 1, id: "chapter" };
    });

  const verse =
    filteredData?.muxli &&
    new Array(+filteredData?.muxli[0].cc)?.fill()?.map((_, i) => {
      return { value: i + 1, label: i + 1, id: "verse" };
    });

  //   For result

  const versionGeo = [
    {
      value: "ახალი გადამუშავებული გამოცემა 2015",
      label: "ახალი გადამუშავებული გამოცემა 2015",
      id: "version",
    },
    {
      value: "სბს–2013",
      label: "სბს–2013",
      id: "version",
    },
    {
      value: "სბს–სტოკჰოლმი 2001",
      label: "სბს–სტოკჰოლმი 2001",
      id: "version",
    },
    {
      value: "საპატრიარქო – orthodoxy.ge",
      label: "საპატრიარქო – orthodoxy.ge",
      id: "version",
    },
    {
      value: "მცხეთური ხელნაწერი–გ. მთაწმინდელი",
      label: "მცხეთური ხელნაწერი–გ. მთაწმინდელი",
      id: "version",
    },
    {
      value: "ადიშის ოთხთავი 897 წ. – ძველი მონუსკრიპტები",
      label: "ადიშის ოთხთავი 897 წ. – ძველი მონუსკრიპტები",
      id: "version",
    },
    {
      value: "ახალი ქვეყნიერების თარგმანი*",
      label: "ახალი ქვეყნიერების თარგმანი*",
      id: "version",
    },
    {
      value: "ახალი აღთქმა, სტოკჰოლმი 1985",
      label: "ახალი აღთქმა, სტოკჰოლმი 1985",
      id: "version",
    },
  ];

  const versionEN = [
    {
      value: "NASB New American Standard Bible",
      label: "NASB New American Standard Bible",
      id: "version",
    },
    {
      value: "NIV New International Version",
      label: "NIV New International Version",
      id: "version",
    },
    {
      value: "KJV King James Version",
      label: "KJV King James Version",
      id: "version",
    },
    {
      value: "Geneva Bible 1599",
      label: "Geneva Bible 1599",
      id: "version",
    },
    {
      value: "NRSV New Revised Standard Bible",
      label: "NRSV New Revised Standard Bible",
      id: "version",
    },
    {
      value: "Darby's New Translation",
      label: "Darby's New Translation",
      id: "version",
    },
    {
      value: "ESV English Standard Version 2001",
      label: "ESV English Standard Version 2001",
      id: "version",
    },
    {
      value: "Douay Rheims Bible",
      label: "Douay Rheims Bible",
      id: "version",
    },
    {
      value: "WEB-World English Bible",
      label: "WEB-World English Bible",
      id: "version",
    },
    {
      value: "Modern KJV",
      label: "Modern KJV",
      id: "version",
    },
    {
      value: "ASV American Standard Version 1901",
      label: "ASV American Standard Version 1901",
      id: "version",
    },
    {
      value: "Basic English Bible",
      label: "Basic English Bible",
      id: "version",
    },
    {
      value: "Catholic Public Domain Version 2009",
      label: "Catholic Public Domain Version 2009",
      id: "version",
    },
  ];

  const versionRU = [
    {
      value: "Синодальный перевод",
      label: "Синодальный перевод",
      id: "version",
    },
    {
      value: "Hовый Pусский Перевод (IBS)",
      label: "Hовый Pусский Перевод (IBS)",
      id: "version",
    },
    {
      value: "Библия Германа Менге",
      label: "Библия Германа Менге",
      id: "version",
    },

    {
      value: "Священное Писание - Смысловой Перевод",
      label: "Священное Писание - Смысловой Перевод",
      id: "version",
    },

    {
      value: "Церковно-славянская Библия Кирилла и Мефодия",
      label: "Церковно-славянская Библия Кирилла и Мефодия",
      id: "version",
    },

    {
      value: "Новый Завет - Восстановительный перевод 1998",
      label: "Новый Завет - Восстановительный перевод 1998",
      id: "version",
    },

    {
      value: "Слово Жизни - Новый Завет 1991",
      label: "Слово Жизни - Новый Завет 1991",
      id: "version",
    },

    {
      value: "Новый Завет - перевод еписк. Кассиана (Безобразова)",
      label: "Новый Завет - перевод еписк. Кассиана (Безобразова)",
      id: "version",
    },
  ];

  const fontSizes = [
    {
      value: "2",
      label: "2",
      id: "fontSize",
    },
    {
      value: "3",
      label: "3",
      id: "fontSize",
    },
    {
      value: "4",
      label: "4",
      id: "fontSize",
    },
    {
      value: "5",
      label: "5",
      id: "fontSize",
    },
    {
      value: "6",
      label: "6",
      id: "fontSize",
    },
    {
      value: "7",
      label: "7",
      id: "fontSize",
    },
    {
      value: "8",
      label: "8",
      id: "fontSize",
    },
    {
      value: "9",
      label: "9",
      id: "fontSize",
    },
  ];

  return {
    languages,
    versions,
    book,
    chapter,
    verse,
    versionGeo,
    versionEN,
    versionRU,
    fontSizes,
  };
};

export default useData;
