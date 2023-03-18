import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import Preview from "./Preview";
import useBibleContext from "../hooks/useBibleContext";
import Skeleton from "./Skeleton";

const Header = () => {
  const { originalData, setoriginalData, filteredData, setfilteredData } =
    useBibleContext();

  // inputvalues gadatana global contextshi da buttonze onsumbitze save to other value in 3 language
  const [phrase, setPhrase] = useState("");
  const [inputValues, setInputValues] = useState({
    version: "",
    book: null,
    chapter: 1,
    verse: 1,
    versemde: null,
  });
  const [language, setLanguage] = useState(
    JSON.parse(localStorage.getItem("language")) || {
      value: "geo",
      label: "geo",
      id: "ena",
    }
  );

  const [version, setVersion] = useState(
    JSON.parse(localStorage.getItem("version"))
  );

  const baseURL = `https://holybible.ge/service.php?w=${inputValues.book}&t=${inputValues.chapter}&m=&s=${phrase}&mv=${version?.value}&language=${language?.value}&page=1`;

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(baseURL);
      setoriginalData(data);

      if (inputValues.verse || inputValues.versemde) {
        const myData = data.bibleData.slice(
          inputValues.verse - 1,
          inputValues.versemde ? inputValues.versemde : inputValues.verse
        );
        setfilteredData({ ...data, bibleData: myData });
      } else {
        setfilteredData(data);
      }
    };

    fetch();
  }, [inputValues, phrase, language, version]);

  //   console.log(filteredData.bibleData);

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

      if (triggleAction.removedValues[0].id === "chapter") {
        setInputValues({
          ...inputValues,
          [triggleAction.removedValues[0].id]: null,
          versemde: null,
          verse: null,
        });
      }
    } else {
      setInputValues({ ...inputValues, [e?.id]: e?.value });
    }
  };

  ////////////////////////////////////////////////////////////////

  //   DATA <<<------->>>

  const languages = [
    {
      value: "geo",
      label: "geo",
      id: "ena",
    },
    {
      value: "eng",
      label: "eng",
      id: "ena",
    },
    {
      value: "russian",
      label: "russian",
      id: "ena",
    },
  ];

  const versions = filteredData?.versions.map((item, i) => {
    return { value: item, label: item, id: "version" };
  });

  const bible = originalData?.bibleNames
    ?.map((item, i) => {
      return { value: i + 1, label: item, id: "book" };
    })
    .slice(0, 3);

  const oldTest = originalData?.bibleNames
    ?.map((item, i) => {
      return { value: i + 1, label: item, id: "book" };
    })
    .slice(3, 42);

  const newTest = originalData?.bibleNames
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

  const versemde =
    filteredData?.muxli &&
    new Array(+filteredData?.muxli[0].cc)
      ?.fill()
      ?.map((_, i) => {
        return { value: i + 1, label: i + 1, id: "versemde" };
      })
      .slice(inputValues.verse);

  return (
    <>
      <div className="w-full">
        <form className="flex justify-start items-center flex-grow-4 gap-3 my-4 flex-wrap">
          {/* ena */}
          <Select
            placeholder={"ენა"}
            defaultValue={language}
            options={languages}
            isSearchable={true}
            onChange={(e) => {
              setLanguage(e);
              localStorage.setItem("language", JSON.stringify(e));
            }}
            className="react-select-container w-[100px]  flex-auto  z-50"
          />

          {/* version */}
          <Select
            placeholder={"ვერსია"}
            defaultValue={version}
            options={versions}
            isSearchable={true}
            onChange={(e) => {
              setVersion(e);
              localStorage.setItem("version", JSON.stringify(e));
            }}
            className="react-select-container w-[300px]  flex-auto  z-50"
          />
          {/* wigni */}
          <Select
            placeholder={"წიგნი"}
            options={book}
            isClearable={true}
            isSearchable={true}
            onChange={(e, triggleAction) => inputChanges(e, triggleAction)}
            className="react-select-container w-[300px]  flex-auto  "
          />

          {/* Tavi */}
          <Select
            value={chapter?.filter(
              (option) => option.label === inputValues.chapter || null
            )}
            placeholder={"თავი"}
            options={chapter}
            isSearchable={true}
            isClearable={true}
            onChange={(e, triggleAction) => inputChanges(e, triggleAction)}
            className="react-select-container w-[150px] flex-auto "
            classNamePrefix="1"
          />

          {/* muxli */}
          <Select
            value={verse.filter(
              (option) => option.label === inputValues.verse || null
            )}
            defaultValue={verse?.filter((option) => option.label === 1)}
            placeholder={"მუხლი"}
            options={verse}
            isSearchable={true}
            isClearable={true}
            onChange={(e, triggleAction) => inputChanges(e, triggleAction)}
            className="react-select-container w-[150px] flex-auto"
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
            className="react-select-container w-[150px] flex-auto"
          />

          <input
            onChange={(e) => {
              setInputValues({
                version: "",
                book: 1,
                chapter: null,
                verse: null,
                versemde: null,
              });

              setPhrase(e.target.value);
            }}
            value={phrase}
            type="text"
            className="outline-none  p-3  w-[300px] h-[37px] rounded-[3px] border-[1.2px] border-gray-300   flex-auto "
          />
        </form>
      </div>
      {filteredData.bibleData.length === 0 ? (
        <Skeleton />
      ) : (
        <Preview filteredData={filteredData} />
      )}
    </>
  );
};

export default Header;
