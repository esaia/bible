import React from "react";
import { Checkbox } from "@material-tailwind/react";
import Select from "react-select";
import { motion } from "framer-motion";
import FramerMotionWrapper from "../FramerMotionWrapper";

const VersionSelect = ({
  title,
  data,
  activeversion,
  versions,
  setVersions,
  language,
  setLanguage,
  activeLang,
}) => {
  return (
    <FramerMotionWrapper>
      <div className=" flex items-center ">
        <label className=" dark:text-white w-[130px]">{title}</label>
        <Checkbox
          id={title}
          onChange={() => setLanguage(!language)}
          checked={language}
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
