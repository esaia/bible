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
  const [theme, setTheme] = useState(1);

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

      setTheme(localStorage.getItem("themeNumber"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  console.log(fontSize);

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div
        className={`w-full h-[100vh] px-10 flex justify-center items-start  flex-col  gap-16 bg-blend-overlay bgblind showbackground
      ${(() => {
        switch (theme) {
          case "1":
            return "bg-1img";
          case "2":
            return "bg-2img";
          case "3":
            return "bg-3img";
          case "4":
            return "bg-4img";
          case "5":
            return "bg-5img";
          case "6":
            return "bg-6img";
          case "7":
            return "bg-7img";
          case "8":
            return "bg-8img";

          default:
            return "bg-1img";
        }
      })()}
      
      
      `}
      >
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
                  <p
                    className={`showText

                  ${(() => {
                    switch (fontSize) {
                      case 1:
                        return "text-1xl";
                      case 2:
                        return "text-2xl";
                      case 3:
                        return "text-3xl";
                      case 4:
                        return "text-4xl";
                      case 5:
                        return "text-5xl";
                      case 6:
                        return "text-6xl";
                      case 7:
                        return "text-7xl";
                      case 8:
                        return "text-8xl";
                      default:
                        return "text-5xl";
                    }
                  })()}
                  
              `}
                  >
                    {item.bv}
                  </p>
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
                  <p
                    className={`showText  ${(() => {
                      switch (fontSize) {
                        case 1:
                          return "text-1xl";
                        case 2:
                          return "text-2xl";
                        case 3:
                          return "text-3xl";
                        case 4:
                          return "text-4xl";
                        case 5:
                          return "text-5xl";
                        case 6:
                          return "text-6xl";
                        case 7:
                          return "text-7xl";
                        case 8:
                          return "text-8xl";

                        default:
                          return "text-4xl";
                      }
                    })()} `}
                  >
                    {item.bv}
                  </p>
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
                  <p
                    className={`showText  
                       ${(() => {
                         switch (fontSize) {
                           case 1:
                             return "text-1xl";
                           case 2:
                             return "text-2xl";
                           case 3:
                             return "text-3xl";
                           case 4:
                             return "text-4xl";
                           case 5:
                             return "text-5xl";
                           case 6:
                             return "text-6xl";
                           case 7:
                             return "text-7xl";
                           case 8:
                             return "text-8xl";
                           default:
                             return "text-5xl";
                         }
                       })()}
                        `}
                  >
                    {item.bv}
                  </p>
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
