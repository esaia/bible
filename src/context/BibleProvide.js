import React, { createContext, useEffect, useReducer, useState } from "react";
import { json, Outlet } from "react-router-dom";
import useData from "../hooks/useData";

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
  const inputValueInitial = {
    version:
      localStorage.getItem("previewVersion") ||
      "ახალი გადამუშავებული გამოცემა 2015",
    book: 4,
    chapter: 1,
    verse: 1,
    versemde: null,
    phrase: "",
    language: localStorage.getItem("previewLanguage") || "geo",
  };

  const bibleDataReducer = (state, { type, payload }) => {
    const e = payload?.event;
    const triggleAction = payload?.triggleAction;

    switch (type) {
      case "CHANGE_INPUT_VALUE":
        if (triggleAction.action === "clear" && triggleAction?.removedValues) {
          if (triggleAction.removedValues[0].id === "verse") {
            return {
              ...state,
              [triggleAction.removedValues[0].id]: null,
              versemde: null,
            };
          } else if (triggleAction.removedValues[0].id === "chapter") {
            return {
              ...state,
              [triggleAction.removedValues[0].id]: null,
              versemde: null,
              verse: null,
            };
          } else if (triggleAction.removedValues[0].id === "versemde") {
            return {
              ...state,
              [triggleAction.removedValues[0].id]: null,
            };
          } else {
            return {
              ...state,
              [triggleAction.removedValues[0].id]: null,
            };
          }
        } else {
          return { ...state, [e?.id]: e?.value, phrase: "" };
        }
      case "CHANGE_LANGUAGE_AND_VERSION":
        // add to localstorage
        if (e.id === "version") {
          localStorage.setItem("previewVersion", e.value);
        } else if (e.id === "language") {
          localStorage.setItem("previewLanguage", e.value);
        }
        return { ...state, [e?.id]: e?.value, phrase: "" };

      case "DECREASE_VERSE":
        if (state.verse === 1) {
          return { ...state };
        }
        return {
          ...state,
          verse: +state.verse - 1,
        };
      case "INCREASE_VERSE":
        return {
          ...state,
          verse: +state.verse + 1,
        };

      case "PHRASE_INPUT":
        return {
          ...state,
          version: "",
          book: 1,
          chapter: null,
          verse: null,
          versemde: null,
          phrase: payload.event.target.value,
        };

      default:
        break;
    }
  };

  const [inputValues, inputDispatch] = useReducer(
    bibleDataReducer,
    inputValueInitial
  );

  const [isDarkMode, setisDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkmode")) || false
  );

  const [filteredData, setfilteredData] = useState(initialState);
  const [result, setResult] = useState(
    JSON.parse(localStorage.getItem("result"))
  );

  const [isLanguage, setIsLanguage] = useState(
    JSON.parse(localStorage?.getItem("languages")) || null
  );

  useEffect(() => {
    localStorage.setItem(
      "language",
      JSON.stringify({
        value: "geo",
        label: "geo",
        id: "ena",
      })
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("result", JSON.stringify(result));
  }, [result, isDarkMode, setisDarkMode]);

  return (
    <BibleContext.Provider
      value={{
        isDarkMode,
        setisDarkMode,
        filteredData,
        setfilteredData,
        result,
        setResult,
        isLanguage,
        setIsLanguage,
        inputDispatch,
        inputValues,
      }}
    >
      <div className={`${isDarkMode && "dark"} font-banner`}>
        <div className="dark:bg-[#111827]">{children}</div>
      </div>
    </BibleContext.Provider>
  );
};

export default BibleProvide;
