import React from "react";
import { Checkbox } from "@material-tailwind/react";
import Select from "react-select";
import FramerMotionWrapper from "../FramerMotionWrapper";
import useBibleContext from "../../hooks/useBibleContext";

const VersionSelect = ({ title, data, activeversion, activeLang }) => {
  const { isLanguage, setIsLanguage, versions, setVersions } =
    useBibleContext();

  return (
    <FramerMotionWrapper>
      <div className=" flex items-center ">
        <label className=" dark:text-white w-[130px]">{title}</label>
        <Checkbox
          id={title}
          onChange={() => {
            setIsLanguage({
              ...isLanguage,
              [activeLang]: !isLanguage[activeLang],
            });
          }}
          checked={isLanguage[activeLang]}
        />
        <Select
          options={data}
          isSearchable={true}
          onChange={(e) => setVersions({ ...versions, [activeLang]: e.value })}
          className="my-react-select-container  pl-5 w-[300px]"
          classNamePrefix="my-react-select"
          value={{
            value: activeversion,
            label: activeversion,
            id: "version",
          }}
        />
      </div>
    </FramerMotionWrapper>
  );
};

export default VersionSelect;
