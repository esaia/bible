import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { BsRocketTakeoff, BsSlashLg } from "react-icons/bs";
import useBibleContext from "../hooks/useBibleContext";
import { Button, checkbox } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import SelectTheme from "./SelectTheme";
import Header from "./Header";
import useData from "../hooks/useData";

const Versions = () => {
  const { filteredData, setResult, setIsLanguage, fontSize, setFontSize } =
    useBibleContext();

  const [isGeorgia, setisGeorgia] = useState(
    JSON.parse(localStorage?.getItem("languages"))?.geo || false
  );
  const [isEnglish, setisEnglish] = useState(
    JSON.parse(localStorage?.getItem("languages"))?.eng || false
  );
  const [isRussian, setisRussian] = useState(
    JSON.parse(localStorage?.getItem("languages"))?.rus || false
  );
  const [versions, setVersions] = useState(
    JSON.parse(localStorage.getItem("versions")) || {
      geo: "ახალი გადამუშავებული გამოცემა 2015",
      eng: "KJV King James Version",
      rus: "Синодальный перевод",
    }
  );

  useEffect(() => {
    setIsLanguage({ geo: isGeorgia, eng: isEnglish, rus: isRussian });
  }, [isEnglish, isGeorgia, isRussian]);

  useEffect(() => {
    localStorage.setItem("versions", JSON.stringify(versions));
  }, [versions]);

  // DATA
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

  const onSave = async () => {
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

    const dataGeo = await axios.get(geoURL);
    const dataEng = await axios.get(engURL);
    const dataRus = await axios.get(rusURL);

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
  };

  return (
    <div>
      <Header onSave={onSave} />

      <div className="mt-2 cursor-pointer flex justify-center items-center      gap-4 flex-col   pt-16">
        {/* geo */}
        <div className=" flex items-center ">
          <label className=" dark:text-white w-[130px]">Georgia</label>

          <Checkbox
            onChange={() => setisGeorgia(!isGeorgia)}
            checked={isGeorgia}
          />

          <Select
            options={versionGeo}
            isSearchable={true}
            onChange={(e) => setVersions({ ...versions, geo: e.value })}
            className="my-react-select-container  pl-5 w-[300px]"
            classNamePrefix="my-react-select"
            value={{
              value: versions.geo,
              label: versions.geo,
              id: "version",
            }}
          />
        </div>

        {/* eng */}
        <div className=" flex items-center ">
          <label className="dark:text-white w-[130px] ">English</label>

          <Checkbox
            onChange={() => setisEnglish(!isEnglish)}
            checked={isEnglish}
          />

          <Select
            options={versionEN}
            isSearchable={true}
            onChange={(e) => setVersions({ ...versions, eng: e.value })}
            className="my-react-select-container  pl-5 w-[300px] "
            classNamePrefix="my-react-select"
            value={{
              value: versions.eng,
              label: versions.eng,
              id: "version",
            }}
          />
        </div>
        {/* rus */}
        <div className=" flex items-center  ">
          <label className="dark:text-white w-[130px]">Russian</label>

          <Checkbox
            onChange={() => setisRussian(!isRussian)}
            checked={isRussian}
          />

          <Select
            options={versionRU}
            isSearchable={true}
            onChange={(e) => setVersions({ ...versions, rus: e.value })}
            className="my-react-select-container pl-5 w-[300px] "
            classNamePrefix="my-react-select"
            value={{
              value: versions.rus,
              label: versions.rus,
              id: "version",
            }}
          />
        </div>

        <div className="flex gap-2 py-10">
          <Button
            className="flex items-center gap-3 text-md px-4 py-2 bg-green-400"
            onClick={onSave}
          >
            <BsRocketTakeoff
              width={200}
              height={400}
              className="text-5x cursor-pointer "
            />
            Show
          </Button>

          <Button
            className="flex items-center gap-3 text-md px-4 py-2 bg-red-400"
            onClick={() => {
              setisGeorgia(false);
              setisEnglish(false);
              setisRussian(false);
            }}
          >
            <BsRocketTakeoff
              width={200}
              height={400}
              className="text-5x cursor-pointer "
            />
            Clear
          </Button>

          <Button className="flex items-center gap-3 text-md px-4 py-2 bg-[#374151]">
            <BsRocketTakeoff
              width={200}
              height={400}
              className="text-5x cursor-pointer "
            />
            black
          </Button>

          <Select
            options={fontSizes}
            placeholder="font"
            defaultValue={{
              value: "5",
              label: "5",
              id: "fontSize",
            }}
            onChange={(e) => {
              localStorage.setItem("fontSize", JSON.stringify(+e.value));
              setFontSize(+e.value);
            }}
            className="my-react-select-container w-[100px] flex-auto"
            classNamePrefix="my-react-select"
            value={{
              value: fontSize,
              label: fontSize,
              id: "version",
            }}
          />
        </div>
        <SelectTheme />
        <div>
          <p className="dark:text-white text-center py-7">
            Made By{" "}
            <a
              href="https://www.facebook.com/esaia.gafrindashvili/"
              className="underline"
              target="_blank"
            >
              Eso
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Versions;
