import axios from "axios";
import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

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
    book: 1,
    chapter: 1,
    verse: null,
    versemde: null,
    phrase: "",
    language: localStorage.getItem("previewLanguage") || "geo",
    darkmode: localStorage.getItem("darkmode") === "true" ? true : false,
    fontSize: localStorage.getItem("fontSize") || 5,
    separate: false,
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
          if (e?.id === "book" || e?.id === "chapter") {
            return {
              ...state,
              [e?.id]: e?.value,
              phrase: "",
              verse: null,
              versemde: null,
            };
          }

          return { ...state, [e?.id]: e?.value, phrase: "" };
        }
      case "CHANGE_LANGUAGE_AND_VERSION":
        // add to localstorage
        if (e.id === "version") {
          localStorage.setItem("previewVersion", e.value);
        } else if (e.id === "language") {
          localStorage.setItem("previewLanguage", e.value);
        }
        return {
          ...state,
          [e?.id]: e?.value,
          verse: null,
          versemde: null,
          phrase: "",
        };

      case "CHANGE_DARK_MODE":
        localStorage.setItem("darkmode", !state.darkmode);
        return { ...state, darkmode: !state.darkmode };

      case "CHANGE_FONT_SIZE":
        localStorage.setItem("fontSize", JSON.stringify(+payload));

        return { ...state, fontSize: payload };

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
          separate: true,
          phrase: payload.event.target.value,
        };
      case "SEPARATE_PREVIEW":
        const { wigni, tavi, muxli } = payload;

        return {
          ...state,
          book: +wigni + 3,
          chapter: +tavi,
          verse: muxli,
          phrase: "",
          separate: true,
        };

      case "MAKE_SEPARATE_FALSE":
        return {
          ...state,

          separate: false,
        };

      default:
        break;
    }
  };

  const [inputValues, inputDispatch] = useReducer(
    bibleDataReducer,
    inputValueInitial
  );
  const [filteredData, setfilteredData] = useState(initialState);
  const [isLoadingResult, setIsLoadingResult] = useState(false);
  const [versions, setVersions] = useState(
    JSON.parse(localStorage.getItem("versions")) || {
      geo: "ახალი გადამუშავებული გამოცემა 2015",
      eng: "KJV King James Version",
      rus: "Синодальный перевод",
    }
  );

  const [result, setResult] = useState(
    JSON.parse(localStorage.getItem("result"))
  );

  const [isLanguage, setIsLanguage] = useState(
    JSON.parse(localStorage?.getItem("languages")) || {
      geo: false,
      eng: false,
      rus: false,
    }
  );

  useEffect(() => {
    localStorage.setItem("languages", JSON.stringify(isLanguage));
  }, [isLanguage]);

  useEffect(() => {
    localStorage.setItem("result", JSON.stringify(result));
  }, [result]);

  useEffect(() => {
    localStorage.setItem("versions", JSON.stringify(versions));
  }, [versions]);

  const onSave = useCallback(async () => {
    setIsLoadingResult(true);
    const wigni = +filteredData.bibleData[0].wigni;
    const tavi = +filteredData.bibleData[0].tavi;
    const muxli = +filteredData.bibleData[0].muxli;

    const mappings = {
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
    let englishWigni = mappings[wigni + 3] || null;

    if (filteredData.bibleData.length === 0) {
      return console.log("bibleData not exeists");
    }

    const geoURL = `https://holybible.ge/service.php?w=${
      wigni + 3
    }&t=${tavi}&m=&s=&mv=${versions.geo}&language=geo&page=1`;
    const engURL = `https://holybible.ge/service.php?w=${
      englishWigni ? englishWigni : wigni + 3
    }&t=${tavi}&m=&s=&mv=${versions.eng}&language=eng&page=1`;
    const rusURL = `https://holybible.ge/service.php?w=${
      wigni + 3
    }&t=${tavi}&m=&s=&mv=${versions.rus}&language=russian&page=1`;

    const [dataGeo, dataEng, dataRus] = await Promise.all([
      axios.get(geoURL),
      axios.get(engURL),
      axios.get(rusURL),
    ]);

    const muxliMde =
      filteredData.bibleData[+filteredData.bibleData.length - 1].muxli;

    if (filteredData.bibleData.length === 1) {
      const filteredGeo = dataGeo.data.bibleData.slice(muxli - 1, muxli);
      const filteredEng = dataEng.data.bibleData.slice(muxli - 1, muxli);
      const filteredRus = dataRus.data.bibleData.slice(muxli - 1, muxli);

      setResult({
        geo: {
          data: filteredGeo,
          tavimuxli: `${dataGeo.data.bibleNames[wigni + 2]} ${tavi}:${muxli}`,
        },
        eng: {
          data: filteredEng,
          tavimuxli: `${
            dataEng.data.bibleNames[englishWigni ? englishWigni - 1 : wigni + 2]
          } ${tavi}:${muxli}`,
        },
        rus: {
          data: filteredRus,
          tavimuxli: `${dataRus.data.bibleNames[wigni + 2]} ${tavi}:${muxli}`,
        },
      });
    } else if (filteredData.bibleData.length > 1) {
      const filteredGeo = dataGeo.data.bibleData.slice(muxli - 1, muxliMde);
      const filteredEng = dataEng.data.bibleData.slice(muxli - 1, muxliMde);
      const filteredRus = dataRus.data.bibleData.slice(muxli - 1, muxliMde);

      setResult({
        geo: {
          data: filteredGeo,
          tavimuxli: `${
            dataGeo.data.bibleNames[wigni + 2]
          } ${tavi}:${muxli}-${muxliMde}`,
        },
        eng: {
          data: filteredEng,
          tavimuxli: `${
            dataEng.data.bibleNames[englishWigni ? englishWigni - 1 : wigni + 2]
          } ${tavi}:${muxli}-${muxliMde}`,
        },
        rus: {
          data: filteredRus,
          tavimuxli: `${
            dataRus.data.bibleNames[wigni + 2]
          } ${tavi}:${muxli}-${muxliMde}`,
        },
      });
    }
    setIsLoadingResult(false);
  }, [filteredData]);

  return (
    <BibleContext.Provider
      value={{
        filteredData,
        setfilteredData,
        versions,
        setVersions,
        result,
        setResult,
        isLanguage,
        setIsLanguage,
        inputDispatch,
        inputValues,
        onSave,
        isLoadingResult,
      }}
    >
      <div className={`${inputValues.darkmode && "dark"} font-banner`}>
        <div className="dark:bg-[#111827]">{children}</div>
      </div>
    </BibleContext.Provider>
  );
};

export default BibleProvide;
