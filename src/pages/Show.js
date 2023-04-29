import React, { useEffect, useState } from "react";
import useBibleContext from "../hooks/useBibleContext";
import { SlSizeFullscreen } from "react-icons/sl";
import TextShow from "../components/result-versions/TextShow";

const Show = () => {
  const { result, isLanguage, setResult, setIsLanguage, inputValues } =
    useBibleContext();

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("themeNumber") || 1);
  const [fontSize, setFontSize] = useState(inputValues.fontSize);

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

  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div
        className={`w-full h-full px-10 flex justify-center items-start  flex-col  gap-12 bg-blend-overlay bgblind showbackground 
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
          case "9":
            return "bg-9img";
          case "10":
            return "bg-10img";
          case "11":
            return "bg-11img";
          case "12":
            return "bg-12img";
          case "13":
            return "bg-13img";
          case "14":
            return "bg-14img";
          case "15":
            return "bg-15img";
          case "16":
            return "bg-16img";
          case "17":
            return "bg-17img";
          case "18":
            return "bg-18img";
          case "19":
            return "bg-19img";
          case "20":
            return "bg-20img";

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

        <TextShow
          lang="eng"
          showLanguage={isLanguage.eng}
          result={result}
          fontSize={fontSize}
        />

        <TextShow
          lang="geo"
          showLanguage={isLanguage.geo}
          result={result}
          fontSize={fontSize}
        />

        <TextShow
          lang="rus"
          showLanguage={isLanguage.rus}
          result={result}
          fontSize={fontSize}
        />
      </div>
    </div>
  );
};

export default Show;
