import React, { createContext, useEffect, useState } from "react";
import { json, Outlet } from "react-router-dom";

export const BibleContext = createContext();

const BibleProvide = ({ children }) => {
  const initialState = {
    bibleNames: [
      "ბიბლია",
      "ძველი აღთქმა",
      "ახალი აღთქმა",
      "დაბადება",
      "გამოსვლა",
      "ლევიანნი",
      "რიცხვნი",
      "მეორე რჯული",
      "იესო ნავეს ძე",
      "მსაჯული",
      "რუთი",
      "1 მეფეთა",
      "2 მეფეთა",
      "3 მეფეთა",
      "4 მეფეთა",
      "1 ნეშტთა",
      "2 ნეშტთა",
      "ეზრა",
      "ნეემია",
      "ესთერი",
      "იობი",
      "ფსალმუნები",
      "იგავნი სოლომონისა",
      "ეკლესიასტე",
      "ქებათა-ქება სოლომონისა",
      "ესაია",
      "იერემია",
      "გოდება იერემიასი",
      "ეზეკიელი",
      "დანიელი",
      "ოსია",
      "იოველი",
      "ამოსი",
      "აბდია",
      "იონა",
      "მიქა",
      "ნაუმი",
      "აბაკუმი",
      "სოფონია",
      "ანგია",
      "ზაქარია",
      "მალაქია",
      "მათეს სახარება",
      "მარკოზის სახარება",
      "ლუკას სახარება",
      "იოანეს სახარება",
      "მოციქულთა საქმეები",
      "იაკობის წერილი",
      "1 პეტრეს წერილი",
      "2 პეტრეს წერილი",
      "1 იოანე",
      "2 იოანე",
      "3 იოანე",
      "იუდა",
      "რომაელთა მიმართ",
      "1 კორინთელთა მიმართ",
      "2 კორინთელთა მიმართ",
      "გალატელთა მიმართ",
      "ეფესელთა მიმართ",
      "ფილიპელთა მიმართ",
      "კოლასელთა მიმართ",
      "1 თესალონიკელთა მიმართ",
      "2 თესალონიკელთა მიმართ",
      "1 ტიმოთეს მიმართ",
      "2 ტიმოთეს მიმართ",
      "ტიტეს მიმართ",
      "ფილიმონის მიმართ",
      "ებრაელთა მიმართ",
      "გამოცხადება",
    ],
    bibleData: [],
    versions: [
      //   "ახალი გადამუშავებული გამოცემა 2015",
      //   "სბს–2013",
      //   "სბს–სტოკჰოლმი 2001",
      //   "საპატრიარქო – orthodoxy.ge",
      //   "მცხეთური ხელნაწერი–გ. მთაწმინდელი",
      //   "ადიშის ოთხთავი 897 წ. – ძველი მონუსკრიპტები",
      //   "ახალი ქვეყნიერების თარგმანი*",
      //   "ახალი აღთქმა, სტოკჰოლმი 1985",
    ],
    languages: [
      "georgian",
      "english",
      "russian",
      "german",
      "spanish",
      "french",
      "greek",
      "hebrew",
      "arabic",
      "turkish",
      "latin",
      "japanese",
      "ukrainian",
      "abkhazian",
      "ossetian",
    ],
    langsm: [
      "geo",
      "eng",
      "ru",
      "de",
      "es",
      "fr",
      "gr",
      "he",
      "ae",
      "tr",
      "la",
      "jp",
      "ua",
      "ab",
      "os",
    ],
    tavi: [
      {
        cc: "50",
      },
    ],
    muxli: [
      {
        cc: "31",
      },
    ],

    pagecount: "",
    wtm: {
      wigni: 1,
      tavi: "1",
      muxli: "1",
    },
    bibleData2: "",
  };

  const [isDarkMode, setisDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkmode")) || false
  );

  const [originalData, setoriginalData] = useState({});
  const [filteredData, setfilteredData] = useState(initialState);
  const [result, setResult] = useState(
    JSON.parse(localStorage.getItem("result"))
  );

  const [isLanguage, setIsLanguage] = useState(
    JSON.parse(localStorage?.getItem("languages")) || null
  );

  useEffect(() => {
    localStorage.setItem("languages", JSON.stringify(isLanguage));
  }, [isLanguage]);

  useEffect(() => {
    localStorage.setItem("result", JSON.stringify(result));
    localStorage.setItem("darkmode", isDarkMode);
  }, [result, isDarkMode]);

  return (
    <BibleContext.Provider
      value={{
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
        isDarkMode,
        setisDarkMode,
      }}
    >
      <div className={`${isDarkMode && "dark"} font-banner`}>
        <div className="dark:bg-black">{children}</div>
      </div>
    </BibleContext.Provider>
  );
};

export default BibleProvide;
