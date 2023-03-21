import React from "react";
import { Switch } from "@material-tailwind/react";
import useBibleContext from "../hooks/useBibleContext";

const FixedDetails = () => {
  const { isDarkMode, setisDarkMode } = useBibleContext();

  return (
    <div>
      {/* Right */}
      <div className=" p-3  right-0 bottom-0 text-white m-4 fixed  ">
        <div className="flex">
          <a href="/show" target="_blank">
            <button className=" px-4 py-2 mx-5 dark:bg-[#374151] hover:shadow-lg dark:text-white bg-white text-black border-[#cccccc]  border-[1px]">
              Open Present View
            </button>
          </a>
          <Switch
            color="indigo"
            label={isDarkMode ? "light" : "dark"}
            onChange={() => setisDarkMode(!isDarkMode)}
            checked={isDarkMode}
            ripple={true}
          />
        </div>
      </div>

      {/* left */}
      <div className=" p-3  left-0 bottom-0 text-white m-4 fixed  ">
        <div className="flex">
          <a href="/doc" target="_blank">
            <button className=" px-4 py-2 mx-5 dark:bg-[#374151] hover:shadow-lg dark:text-white bg-white text-black border-[#cccccc]  border-[1px]">
              Documentation
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FixedDetails;
