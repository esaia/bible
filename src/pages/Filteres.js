import React, { useEffect, useState } from "react";
import "react-awesome-button/dist/styles.css";
import FixedDetails from "../components/FixedDetails";
import Header from "../components/Header";
import Versions from "../components/Versions";
import useBibleContext from "../hooks/useBibleContext";

const Filteres = () => {
  const { isDarkMode, setisDarkMode } = useBibleContext();

  useEffect(() => {
    localStorage.setItem("darkmode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className=" w-full min-h-[100vh] flex justify-start items-center flex-col p-4   dark:bg-[#101828]">
      <div className="flex flex-col items-center w-full ">
        <Versions />
        <FixedDetails />
      </div>
    </div>
  );
};

export default Filteres;
