import React, { useEffect, useState } from "react";
import "react-awesome-button/dist/styles.css";
import Header from "../components/Header";
import Preview from "../components/Preview";
import Versions from "../components/Versions";
import useBibleContext from "../hooks/useBibleContext";
import { Switch } from "@material-tailwind/react";

const Filteres = () => {
  const { isDarkMode, setisDarkMode } = useBibleContext();

  useEffect(() => {
    localStorage.setItem("darkmode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className=" w-full min-h-[101vh] flex justify-start items-center flex-col p-4   dark:bg-[#101828]">
      <div className="flex flex-col items-center w-full ">
        <Header />
        <Versions />
        <div className=" p-3  right-0 bottom-0 text-white m-4 fixed">
          <Switch
            color="indigo"
            label={isDarkMode ? "light" : "dark"}
            onChange={() => setisDarkMode(!isDarkMode)}
            checked={isDarkMode}
            ripple={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Filteres;
