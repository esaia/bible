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
import FramerMotionWrapper from "./FramerMotionWrapper";

const Versions = () => {
  const { onSave, isLanguage, setIsLanguage, versions, isLoadingResult } =
    useBibleContext();

  const { versionGeo, versionEN, versionRU } = useData();

  const clearAll = () => {
    // make all value false
    const updatedState = {};
    for (const key in isLanguage) {
      if (isLanguage.hasOwnProperty(key)) {
        updatedState[key] = false;
      }
    }
    setIsLanguage(updatedState);
  };

  return (
    <div>
      <Header onSave={onSave} />

      <div className="mt-2 cursor-pointer flex justify-center items-center      gap-4 flex-col   pt-16">
        <VersionSelect
          title={"Georgia"}
          data={versionGeo}
          activeversion={versions.geo}
          activeLang={Object.keys(versions)[0]}
        />

        <VersionSelect
          title={"English"}
          data={versionEN}
          activeversion={versions.eng}
          activeLang={Object.keys(versions)[1]}
        />

        <VersionSelect
          title={"Russian"}
          data={versionRU}
          activeversion={versions.rus}
          activeLang={Object.keys(versions)[2]}
        />

        <div className="flex items-center justify-center gap-5 py-10  w-full ">
          <FramerMotionWrapper>
            <Button
              className="flex w-32 justify-center items-center gap-3 px-4 py-2 bg-green-600"
              onClick={onSave}
              disabled={isLoadingResult}
            >
              {!isLoadingResult && (
                <BsRocketTakeoff
                  width={200}
                  height={400}
                  className="text-5x cursor-pointer "
                />
              )}
              {isLoadingResult ? "Wait..." : "Show"}
            </Button>
          </FramerMotionWrapper>

          <FramerMotionWrapper>
            <Button
              className="flex items-center gap-3 text-md px-4 py-2 bg-red-600"
              onClick={clearAll}
            >
              Clear
            </Button>
          </FramerMotionWrapper>

          <FramerMotionWrapper>
            <FontSize />
          </FramerMotionWrapper>
        </div>

        <SelectTheme />

        <MadeBy />
      </div>
    </div>
  );
};

export default Versions;
