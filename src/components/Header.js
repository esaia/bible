import React, { useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import Preview from "./Preview";
import useBibleContext from "../hooks/useBibleContext";
import Skeleton from "./Skeleton";
import VerseArrows from "./VerseArrows";
import useData from "../hooks/useData";

const Header = ({ onSave }) => {
  const { filteredData, setfilteredData, inputValues, inputDispatch } =
    useBibleContext();

  const { languages, versions, book, chapter, verse } = useData();

  const baseURL = `https://holybible.ge/service.php?w=${inputValues.book}&t=${inputValues.chapter}&m=&s=${inputValues.phrase}&mv=${inputValues?.version}&language=${inputValues.language}&page=1`;

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(baseURL);

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
  }, [inputValues]);

  const changeInputValue = (e, triggleAction) => {
    inputDispatch({
      type: "CHANGE_INPUT_VALUE",
      payload: { event: e, triggleAction },
    });
  };

  const changeLanguageAndVersion = (e, triggleAction) => {
    inputDispatch({
      type: "CHANGE_LANGUAGE_AND_VERSION",
      payload: { event: e, triggleAction },
    });
  };

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
          <Select
            placeholder={"ენა"}
            defaultValue={{
              value: inputValues.language,
              label: inputValues.language,
              id: "language",
            }}
            options={languages}
            isSearchable={true}
            onChange={(e, triggleAction) =>
              changeLanguageAndVersion(e, triggleAction)
            }
            className="my-react-select-container  w-[100px]  flex-auto z-50"
            classNamePrefix="my-react-select"
          />
          {/* version */}
          <Select
            placeholder={"ვერსია"}
            defaultValue={{
              value: inputValues.version,
              label: inputValues.version,
              id: "version",
            }}
            options={versions}
            isSearchable={true}
            onChange={(e, triggleAction) =>
              changeLanguageAndVersion(e, triggleAction)
            }
            className="my-react-select-container w-[300px]  flex-auto  z-50"
            classNamePrefix="my-react-select"
          />
          {/* wigni */}
          <Select
            placeholder={"წიგნი"}
            options={book}
            isClearable={true}
            isSearchable={true}
            onChange={(e, triggleAction) => changeInputValue(e, triggleAction)}
            className="my-react-select-container w-[300px]  flex-auto  "
            classNamePrefix="my-react-select"
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
            onChange={(e, triggleAction) => changeInputValue(e, triggleAction)}
            className="my-react-select-container w-[150px] flex-auto "
            classNamePrefix="my-react-select"
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
            onChange={(e, triggleAction) => changeInputValue(e, triggleAction)}
            className="my-react-select-container w-[150px] flex-auto"
            classNamePrefix="my-react-select"
          />
          <Select
            value={versemde.filter(
              (option) => option.label === inputValues.versemde || null
            )}
            placeholder={"(მდე)"}
            options={versemde}
            isSearchable={true}
            isClearable={true}
            isDisabled={inputValues.verse ? false : true}
            onChange={(e, triggleAction) => changeInputValue(e, triggleAction)}
            className="my-react-select-container w-[150px] flex-auto"
            classNamePrefix="my-react-select"
          />
          <input
            onChange={(e) => {
              inputDispatch({ type: "PHRASE_INPUT", payload: { event: e } });
            }}
            value={inputValues.phrase}
            type="text"
            className="outline-none  p-3  w-[300px] h-[37px] rounded-[3px] border-[1.2px] border-gray-300   flex-auto dark:bg-[#374151] dark:text-white "
          />
        </form>
      </div>

      {filteredData.bibleData.length === 0 ? (
        <Skeleton />
      ) : (
        <>
          <VerseArrows inputValues={inputValues} onSave={onSave} />

          <Preview />
        </>
      )}
    </>
  );
};

export default Header;
