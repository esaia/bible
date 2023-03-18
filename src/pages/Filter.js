import React, { Children, useEffect, useState } from "react";
import Select from "react-select";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { BsRocketTakeoff, BsSlashLg } from "react-icons/bs";
import styles from "../module.scss";
import axios from "axios";

const Filter = () => {
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
      "ახალი გადამუშავებული გამოცემა 2015",
      "სბს–2013",
      "სბს–სტოკჰოლმი 2001",
      "საპატრიარქო – orthodoxy.ge",
      "მცხეთური ხელნაწერი–გ. მთაწმინდელი",
      "ადიშის ოთხთავი 897 წ. – ძველი მონუსკრიპტები",
      "ახალი ქვეყნიერების თარგმანი*",
      "ახალი აღთქმა, სტოკჰოლმი 1985",
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

  const initialStateEng = {
    bibleNames: [
      "Bible",
      "Old Testament",
      "New Testament",
      "Genesis",
      "Exodus",
      "Leviticus",
      "Numbers",
      "Deuteronomy",
      "Joshua",
      "Judges",
      "Ruth",
      "1 Samuel",
      "2 Samuel",
      "1 Kings",
      "2 Kings",
      "1 Chronicles",
      "2 Chronicles",
      "Ezra",
      "Nehemiah",
      "Esther",
      "Job",
      "Psalms",
      "Proverbs",
      "Ecclesiastes",
      "Song of Solomon",
      "Isaiah",
      "Jeremiah",
      "Lamentations",
      "Ezekiel",
      "Daniel",
      "Hosea",
      "Joel",
      "Amos",
      "Obadiah",
      "Jonah",
      "Micah",
      "Nahum",
      "Habbakuk",
      "Zephaniah",
      "Haggai",
      "Zechariah",
      "Malachi",
      "Matthew",
      "Mark",
      "Luke",
      "John",
      "Acts",
      "Romans",
      "1 Corinthians",
      "2 Corinthians",
      "Galatians",
      "Ephesians",
      "Philippians",
      "Colossians",
      "1 Thessalonians",
      "2 Thessalonians",
      "1 Timothy",
      "2 Timothy",
      "Titus",
      "Philemon",
      "Hebrews",
      "James",
      "1 Peter",
      "2 Peter",
      "1 John",
      "2 John",
      "3 John",
      "Jude",
      "Revelation",
    ],
    bibleData: [],
    versions: [
      "NASB New American Standard Bible",
      "NIV New International Version",
      "KJV King James Version",
      "Geneva Bible 1599",
      "NRSV New Revised Standard Bible",
      "Darby's New Translation",
      "ESV English Standard Version 2001",
      "Douay Rheims Bible",
      "WEB-World English Bible",
      "Modern KJV",
      "ASV American Standard Version 1901",
      "Basic English Bible",
      "Catholic Public Domain Version 2009",
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
        cc: "28",
      },
    ],
    muxli: [
      {
        cc: "25",
      },
    ],
    trans: {
      dzebna: "Search",
      tavi: "Chapter",
      muxli: "Verse",
      fsalmuni: "Psalms",
      Ena: "Language",
      SeadareTargmani: "Compare Translation",
      pirveli: "First",
      bolo: "Last",
      shemdegi: "Previuous",
      wina: "Next",
      biblia: "Bible",
      dzveliAgtqma: "Old Testament",
      axaliAgtqma: "New Testament",
      chanaweri: "Record",
      dagvikavshirdit: "Contact Us",
      mtavari: "MAIN PAGE",
      airchieena: "Select a language",
      airchieversia: "Select a version",
      versia: "Version",
      parametrebi: "Select a font",
      airchieferi: "Select a color",
      dzebnisshewyveta: "Search Stop",
      versiaSheicavs: "The verdion includes only New Testament",
      versiaSheicavs2: "Includes only Old Testament",
      settings: "Settings",
      close: "Close",
      save: "Save",
      audiobible: "AUDIO BIBLE",
      blog: "BLOG",
      oldversion: "OLD VERSION",
      moidzebna: "Found",
    },
    pagecount: "",
    wtm: {
      wigni: 40,
      tavi: 1,
      muxli: "",
    },
    bibleData2: "",
  };

  const [res, setRes] = useState(initialState);
  const [filteredArray, setfilteredArray] = useState(initialState);
  const [englishData, setEnglishData] = useState(initialStateEng);
  const [russianData, setRussianData] = useState(initialState);

  const [georgiaVersionInput, setGeorgiaVersionInput] = useState(
    "ახალი გადამუშავებული გამოცემა 2015"
  );

  const [englishVersionInput, setenglishVersionInput] = useState(
    "KJV King James Version"
  );

  const [inputValues, setInputValues] = useState({
    version: "ახალი გადამუშავებული გამოცემა 2015",
    book: null,
    chapter: 1,
    verse: 1,
    versemde: null,
  });
  const [phrase, setPhrase] = useState("");
  const [isGeorgia, setisGeorgia] = useState(true);
  const [isEnglish, setisEnglish] = useState(false);
  const [isRussian, setisRussian] = useState(false);
  const [storageResult, setStorageResult] = useState({});

  const baseURL = `https://holybible.ge/service.php?w=${inputValues.book}&t=${inputValues.chapter}&m=&s=${phrase}&mv=${georgiaVersionInput}&language=eng&page=1`;
  const georgiaURL = `https://holybible.ge/service.php?w=${inputValues.book}&t=${inputValues.chapter}&m=&s=${phrase}&mv=${georgiaVersionInput}&language=geo&page=1`;
  const englishURL = `https://holybible.ge/service.php?w=${inputValues.book}&t=${inputValues.chapter}&m=&s=${phrase}&mv=${englishVersionInput}&language=eng&page=1`;
  const russianURL = `https://holybible.ge/service.php?w=${inputValues.book}&t=${inputValues.chapter}&m=&s=${phrase}&mv=${inputValues.version}&language=russian&page=1`;

  //   axios api call
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(baseURL);

      const english = await axios.get(englishURL);
      const russian = await axios.get(russianURL);

      setRes({ ...data });
      //   if muxli Filter Data
      if (inputValues.verse || inputValues.versemde) {
        const myData = data.bibleData.slice(
          inputValues.verse - 1,
          inputValues.versemde ? inputValues.versemde : inputValues.verse
        );
        setfilteredArray({ ...filteredArray, bibleData: myData });
      } else {
        setfilteredArray({ ...data });
      }

      setEnglishData(english.data);
      setRussianData(russian.data);
    };

    fetchData();
  }, [inputValues, phrase, georgiaVersionInput]);

  const saveToLocalstorage = async () => {
    // georgia
    // if (isGeorgia) {
    //   const geoData = await axios.get(georgiaURL);
    //   const myData = geoData.bibleData.slice(
    //     inputValues.verse - 1,
    //     inputValues.versemde ? inputValues.versemde : inputValues.verse
    //   );
    //   const tavi = inputValues.chapter;
    //   let muxli;
    //   if (myData.length === 1) {
    //     muxli = myData[0].muxli;
    //   } else {
    //     muxli = `${myData[0].muxli}-${myData[myData.length - 1].muxli}`;
    //   }
    //   if (inputValues.verse || inputValues.versemde) {
    //     setStorageResult({
    //       ...storageResult,
    //       georgia: {
    //         data: myData,
    //         tavimuxli: `${
    //           geoData.bibleNames[inputValues.book - 1]
    //         } ${tavi}:${muxli}`,
    //       },
    //     });
    //   } else {
    //     setStorageResult({
    //       ...storageResult,
    //       georgia: {
    //         geoData: geoData.bibleData,
    //         tavimuxli: `${
    //           geoData.bibleNames[inputValues.book - 1]
    //         } ${tavi} : ${muxli}`,
    //       },
    //     });
    //   }
    // }
  };

  ////////////////////////////////////////////////////////////////////
  const inputChanges = (e, triggleAction) => {
    if (triggleAction.action === "clear" && triggleAction?.removedValues) {
      setInputValues({
        ...inputValues,
        [triggleAction.removedValues[0].id]: null,
      });

      if (triggleAction.removedValues[0].id === "verse") {
        setInputValues({
          ...inputValues,
          [triggleAction.removedValues[0].id]: null,

          versemde: null,
        });
      }
    } else {
      setInputValues({ ...inputValues, [e?.id]: e?.value });
    }
  };

  ////////////////////////////////////////////////////////////////
  useEffect(() => {
    const handleStorageChange = () => {
      const bible = JSON.parse(localStorage.getItem("bible"));
      setPhrase(bible.phrase);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("bible", JSON.stringify({ phrase }));
  };

  //   DATA
  const versionGeo = filteredArray?.versions?.map((item, i) => {
    return {
      value: item,
      label: item,
      id: "version",
    };
  });

  const versionEN = englishData?.versions?.map((item, i) => {
    return {
      value: item,
      label: item,
      id: "version",
    };
  });

  const versionRU = russianData?.versions?.map((item, i) => {
    return {
      value: item,
      label: item,
      id: "version",
    };
  });

  const bible = filteredArray?.bibleNames
    ?.map((item, i) => {
      return { value: i + 1, label: item, id: "book" };
    })
    .slice(0, 3);

  const oldTest = filteredArray?.bibleNames
    ?.map((item, i) => {
      return { value: i + 1, label: item, id: "book" };
    })
    .slice(3, 42);

  const newTest = filteredArray?.bibleNames
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
    filteredArray?.tavi &&
    new Array(+filteredArray?.tavi[0].cc)?.fill()?.map((_, i) => {
      return { value: i + 1, label: i + 1, id: "chapter" };
    });

  const verse =
    filteredArray?.muxli &&
    new Array(+filteredArray?.muxli[0].cc)?.fill()?.map((_, i) => {
      return { value: i + 1, label: i + 1, id: "verse" };
    });

  const versemde =
    filteredArray?.muxli &&
    new Array(+filteredArray?.muxli[0].cc)
      ?.fill()
      ?.map((_, i) => {
        return { value: i + 1, label: i + 1, id: "versemde" };
      })
      .slice(inputValues.verse);

  return (
    <div className="w-full min-h-[101vh] flex justify-start items-center flex-col p-4   dark:bg-[#080719]  ">
      <div className="flex flex-col items-center w-full ">
        <div className="w-full">
          <form
            className="flex justify-start items-center flex-grow-4 gap-3 my-4 flex-wrap"
            onSubmit={onSubmit}
          >
            {/* versia */}
            {/* <Select
              defaultValue={version[0]}
              options={version}
              isSearchable={true}
              onChange={(e, triggleAction) => inputChanges(e, triggleAction)}
              className="react-select-container w-[300px]  flex-auto z-50"
            /> */}

            {/* wigni */}
            <Select
              placeholder={"წიგნი"}
              options={book}
              isClearable={true}
              isSearchable={true}
              onChange={(e, triggleAction) => inputChanges(e, triggleAction)}
              className="react-select-container w-[300px]  flex-auto  z-50"
            />

            {/* Tavi */}
            <Select
              value={chapter.filter(
                (option) => option.label === inputValues.chapter || null
              )}
              placeholder={"თავი"}
              options={chapter}
              isSearchable={true}
              isClearable={true}
              onChange={(e, triggleAction) => inputChanges(e, triggleAction)}
              className="react-select-container w-[150px] flex-auto  z-50"
              classNamePrefix="1"
            />

            {/* muxli */}
            <Select
              value={verse.filter(
                (option) => option.label === inputValues.verse || null
              )}
              defaultValue={verse.filter((option) => option.label === 1)}
              placeholder={"მუხლი"}
              options={verse}
              isSearchable={true}
              isClearable={true}
              onChange={(e, triggleAction) => inputChanges(e, triggleAction)}
              className="react-select-container w-[150px] flex-auto z-50"
            />
            <Select
              value={versemde.filter(
                (option) => option.label === inputValues.versemde || null
              )}
              placeholder={"მუხლი (მდე)"}
              options={versemde}
              isSearchable={true}
              isClearable={true}
              isDisabled={inputValues.verse ? false : true}
              onChange={(e, triggleAction) => inputChanges(e, triggleAction)}
              className="react-select-container w-[150px] flex-auto z-50"
            />

            <input
              onChange={(e) => {
                setPhrase(e.target.value);
              }}
              value={phrase}
              type="text"
              className="outline-none  p-3  w-[300px] h-[37px] rounded-[3px] border-[1.2px] border-gray-300   flex-auto "
            />
          </form>
        </div>

        <div className="w-full max-w-[1200px]">
          {res?.bibleData &&
            filteredArray?.bibleData.map((item, i) => {
              return (
                <div
                  className="w-full bg-[#030215]   p-5  text-white text-xl mt-6 rounded-sm  dark:bg-white dark:text-black"
                  key={i}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.bv,
                    }}
                  ></div>
                  {/* <h1>{item.bv}</h1> */}
                  <p>
                    {res.bibleNames[+item.wigni + 2]} {item.tavi}:{item.muxli}
                  </p>
                </div>
              );
            })}
        </div>

        <div className="mt-2 cursor-pointer flex items-start gap-4 flex-col">
          <div className="flex gap-4 items-center ">
            <label className="w-28  dark:text-white">ქართულად</label>
            <input
              type="checkbox"
              className="flex-1"
              defaultChecked
              onChange={() => setisGeorgia(!isGeorgia)}
            />

            <Select
              defaultValue={versionGeo[0]}
              options={versionGeo}
              isSearchable={true}
              onChange={(e) => setGeorgiaVersionInput(e.value)}
              className="react-select-container w-[300px]  flex-auto "
            />
          </div>
          <div className="flex gap-4 items-center ">
            <label className="w-28 dark:text-white">ინგლისურად</label>
            <input
              type="checkbox"
              className="flex-1"
              onChange={() => setisEnglish(!isEnglish)}
            />

            <Select
              defaultValue={versionEN[2]}
              options={versionEN}
              isSearchable={true}
              onChange={(e) => setenglishVersionInput(e.value)}
              className="react-select-container w-[300px]  flex-auto "
            />
          </div>
          {/* <div className="flex gap-4 items-center ">
            <label className="w-28 dark:text-white">რუსულად</label>
            <input
              type="checkbox"
              className="flex-1"
              onChange={() => setisRussian(!isRussian)}
            />

            <Select
              defaultValue={versionRU[0]}
              options={versionRU}
              isSearchable={true}
              onChange={(e, triggleAction) => inputChanges(e, triggleAction)}
              className="react-select-container w-[300px]  flex-auto "
            />
          </div> */}
          <div onClick={saveToLocalstorage}>
            <AwesomeButton
              before={<BsRocketTakeoff />}
              type="primary"
              className="cursor-pointer"
            >
              აჩვენე
            </AwesomeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
