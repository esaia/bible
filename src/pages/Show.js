import React, { useEffect, useState } from "react";
import useBibleContext from "../hooks/useBibleContext";

import { SlSizeFullscreen } from "react-icons/sl";
const Show = () => {
  const {
    result,
    isLanguage,
    setResult,
    setIsLanguage,
    fontSize,
    setFontSize,
  } = useBibleContext();

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullscreenClick = () => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();

      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      // window.location.reload(false);

      setResult(JSON.parse(localStorage.getItem("result")));
      setIsLanguage(JSON.parse(localStorage.getItem("languages")));
      setFontSize(JSON.parse(localStorage.getItem("fontSize")));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  console.log(fontSize);
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className=" w-full h-[100vh] px-10 flex justify-center items-start  flex-col  gap-16 bg-blend-overlay bgblind showbackground ">
        {!isFullScreen && (
          <div className="absolute right-0 bottom-0 bg-white p-4 cursor-pointer">
            <SlSizeFullscreen
              onClick={handleFullscreenClick}
              className="text-4xl"
            />
          </div>
        )}

        {/* ENG */}

        {result && isLanguage.eng && (
          <div className="w-full">
            {result?.eng.data.map((item) => {
              return (
                <div key={item.id}>
                  <p className={`showText  text-${fontSize}xl `}>{item.bv}</p>
                </div>
              );
            })}
            <h3 className="tavimuxli">{result?.eng?.tavimuxli}</h3>
          </div>
        )}

        {/* GEO */}
        {result && isLanguage.geo && (
          <div className="">
            {result?.geo.data.map((item) => {
              return (
                <div key={item.id}>
                  <p className={`showText text-${+fontSize}xl `}>{item.bv}</p>
                </div>
              );
            })}
            <h3 className="tavimuxli">{result?.geo?.tavimuxli}</h3>
          </div>
        )}

        {/* rus */}
        {result && isLanguage.rus && (
          <div className="">
            {result?.rus.data.map((item) => {
              return (
                <div key={item.id}>
                  <p className={`showText text-${fontSize}xl  `}>{item.bv}</p>
                </div>
              );
            })}
            <h3 className="tavimuxli">{result?.rus?.tavimuxli}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Show;
