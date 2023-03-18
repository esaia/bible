import React from "react";
import "react-awesome-button/dist/styles.css";
import Header from "../components/Header";
import Preview from "../components/Preview";
import Versions from "../components/Versions";
import useBibleContext from "../hooks/useBibleContext";

const Filteres = () => {
  return (
    <div className="w-full min-h-[101vh] flex justify-start items-center flex-col p-4   dark:bg-[#080719]  ">
      <div className="flex flex-col items-center w-full ">
        <Header />
        <Versions />
      </div>
    </div>
  );
};

export default Filteres;
