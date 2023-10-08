import React, { useEffect, useState } from 'react';
import { SlSizeFullscreen } from 'react-icons/sl';
import TextShow from '../components/result-versions/TextShow';

const Show = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [bgStr, setBgStr] = useState('');

  const [showData, setShowData] = useState(JSON.parse(localStorage.getItem('showData')));
  const [theme, setTheme] = useState(localStorage.getItem('themeNumber') || 1);
  const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 4);
  const [projectorLanguages, setProjectorLanguages] = useState(
    JSON.parse(localStorage.getItem('projectorLanguages')) || {
      geo: false,
      eng: false,
      rus: false,
    },
  );

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
      setProjectorLanguages(JSON.parse(localStorage.getItem('projectorLanguages')));
      setFontSize(JSON.parse(localStorage.getItem('fontSize')));
      setTheme(localStorage.getItem('themeNumber'));
      setShowData(JSON.parse(localStorage.getItem('showData')));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    let themeClass;

    switch (theme) {
      case '1':
        themeClass = 'bg-1img';
        break;
      case '2':
        themeClass = 'bg-2img';
        break;
      case '3':
        themeClass = 'bg-3img';
        break;
      case '4':
        themeClass = 'bg-4img';
        break;
      case '5':
        themeClass = 'bg-5img';
        break;
      case '6':
        themeClass = 'bg-6img';
        break;
      case '7':
        themeClass = 'bg-7img';
        break;
      case '8':
        themeClass = 'bg-8img';
        break;
      case '9':
        themeClass = 'bg-9img';
        break;
      case '10':
        themeClass = 'bg-10img';
        break;
      case '11':
        themeClass = 'bg-11img';
        break;
      case '12':
        themeClass = 'bg-12img';
        break;
      case '13':
        themeClass = 'bg-13img';
        break;
      case '14':
        themeClass = 'bg-14img';
        break;
      case '15':
        themeClass = 'bg-15img';
        break;
      case '16':
        themeClass = 'bg-16img';
        break;
      case '17':
        themeClass = 'bg-17img';
        break;
      case '18':
        themeClass = 'bg-18img';
        break;
      case '19':
        themeClass = 'bg-19img';
        break;
      case '20':
        themeClass = 'bg-20img';
        break;
      default:
        themeClass = 'bg-1img';
    }

    setBgStr(themeClass);
  }, [theme]);

  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div
        className={`w-full h-full px-10 flex justify-center items-start  flex-col  gap-12 bg-blend-overlay bgblind showbackground ${bgStr}`}
      >
        {!isFullScreen && (
          <div className="absolute right-0 bottom-0 bg-white p-4 cursor-pointer">
            <SlSizeFullscreen onClick={handleFullscreenClick} className="text-4xl" />
          </div>
        )}

        {projectorLanguages?.eng && showData && <TextShow lang="eng" showData={showData} fontSize={fontSize} />}
        {projectorLanguages?.geo && showData && <TextShow lang="geo" showData={showData} fontSize={fontSize} />}
        {projectorLanguages?.rus && showData && <TextShow lang="rus" showData={showData} fontSize={fontSize} />}
      </div>
    </div>
  );
};

export default Show;
