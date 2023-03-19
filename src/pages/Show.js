import React, { useEffect, useState } from "react";
import useBibleContext from "../hooks/useBibleContext";

import { SlSizeFullscreen } from "react-icons/sl";
const Show = () => {
  const { result, isLanguage, setResult, setIsLanguage } = useBibleContext();

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
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="max-h-[100vh] h-[100vh] flex justify-center items-start px-20 flex-col showbackground gap-20 bg-blend-overlay bgblind">
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
        <div className="px-20">
          {result?.eng.data.map((item) => {
            return (
              <div key={item.id}>
                <p className="showText  ">{item.bv}</p>
              </div>
            );
          })}
          <h3 className="tavimuxli">{result?.eng?.tavimuxli}</h3>
        </div>
      )}

      {/* GEO */}
      {result && isLanguage.geo && (
        <div className="px-20">
          {result?.geo.data.map((item) => {
            return (
              <div key={item.id}>
                <p className="showText   ">{item.bv}</p>
              </div>
            );
          })}
          <h3 className="tavimuxli">{result?.geo?.tavimuxli}</h3>
        </div>
      )}

      {/* rus */}
      {result && isLanguage.rus && (
        <div className="px-20">
          {result?.rus.data.map((item) => {
            return (
              <div key={item.id}>
                <p className="showText   ">{item.bv}</p>
              </div>
            );
          })}
          <h3 className="tavimuxli">{result?.rus?.tavimuxli}</h3>
        </div>
      )}
    </div>
  );
};

export default Show;
