import React from "react";
import { Checkbox } from "@material-tailwind/react";
import Select from "react-select";

const VersionSelect = ({
  title,
  version,
  activeversion,
  versions,
  setVersions,
  language,
  setLanguage,
  activeLang,
}) => {
  return (
    <div className=" flex items-center ">
      <label className=" dark:text-white w-[130px]">{title}</label>
      <Checkbox onChange={() => setLanguage(!language)} checked={language} />
      <Select
        options={version}
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
  );
};

export default VersionSelect;
