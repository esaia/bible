import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsRocketTakeoff } from "react-icons/bs";
import useBibleContext from "../hooks/useBibleContext";
import { Button } from "@material-tailwind/react";
import SelectTheme from "./SelectTheme";
import Header from "./Header";
import useData from "../hooks/useData";
import VersionSelect from "./result-versions/VersionSelect";
import FontSize from "./result-versions/FontSize";
import MadeBy from "./result-versions/MadeBy";

const Versions = () => {
  const { filteredData, setResult, setIsLanguage } = useBibleContext();
  const { versionGeo, versionEN, versionRU } = useData();

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

  const clearAll = () => {
    setisGeorgia(false);
    setisEnglish(false);
    setisRussian(false);
  };

  useEffect(() => {
    setIsLanguage({ geo: isGeorgia, eng: isEnglish, rus: isRussian });
  }, [isEnglish, isGeorgia, isRussian]);

  useEffect(() => {
    localStorage.setItem("versions", JSON.stringify(versions));
  }, [versions]);

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
  };

  return (
    <div>
      <Header onSave={onSave} />

      <div className="mt-2 cursor-pointer flex justify-center items-center      gap-4 flex-col   pt-16">
        <VersionSelect
          title={"Georgia"}
          data={versionGeo}
          activeversion={versions.geo}
          versions={versions}
          setVersions={setVersions}
          language={isGeorgia}
          setLanguage={setisGeorgia}
          activeLang={Object.keys(versions)[0]}
        />

        <VersionSelect
          title={"English"}
          data={versionEN}
          activeversion={versions.eng}
          versions={versions}
          setVersions={setVersions}
          language={isEnglish}
          setLanguage={setisEnglish}
          activeLang={Object.keys(versions)[1]}
        />
        <VersionSelect
          title={"Russian"}
          data={versionRU}
          activeversion={versions.rus}
          versions={versions}
          setVersions={setVersions}
          language={isRussian}
          setLanguage={setisRussian}
          activeLang={Object.keys(versions)[2]}
        />

        <div className="flex items-center justify-center gap-5 py-10  w-full">
          <Button
            className="flex items-center gap-3 px-4 py-2 bg-green-400"
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
            onClick={clearAll}
          >
            Clear
          </Button>
          <FontSize />
        </div>

        <SelectTheme />

        <MadeBy />
      </div>
    </div>
  );
};

export default Versions;
