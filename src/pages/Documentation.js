import React, { useState } from 'react';
import { Radio, Switch } from '@material-tailwind/react';
import { useBibleSettingContext } from '../context/BibleSettingProvider';
import GeoDoc from '../components/doc/GeoDoc';
import EngDoc from '../components/doc/EngDoc';

const Documentation = () => {
  const { darkMode, setDarkMode } = useBibleSettingContext();
  const [language, setLanguage] = useState('english');

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkmode', !darkMode);
  };

  return (
    <div className="w-full flex justify-center  min-h-[100vh] dark:text-white   dark:bg-[#101828] font-Roboto ">
      <div className="w-full max-w-[800px] mx-3  px-3 rounded-lg md:px-7 py-10 my-6  bg-gray-100 dark:bg-[#161d2b] border border-gray-300 dark:border-gray-800 ">
        {language === 'georgia' ? <GeoDoc /> : <EngDoc />}
      </div>

      {/* Fixed */}
      <div className=" flex flex-col items-end p-3  right-0 bottom-0 text-white m-4 fixed border border-gray-400 bg-gray-200  dark:bg-[#15354f] md:bg-transparent md:dark:bg-transparent md:border-none rounded-sm  ">
        <div className="mb-5">
          <div className="flex items-center cursor-pointer">
            <Radio
              id={'english'}
              value={'english'}
              color="blue-gray"
              onChange={e => setLanguage(e.target.value)}
              checked={language === 'english'}
            />

            <label
              htmlFor="english"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
            >
              English
            </label>
          </div>
          <div className="flex items-center  cursor-pointer">
            <Radio
              id={'georgia'}
              value={'georgia'}
              color="blue-gray"
              onChange={e => setLanguage(e.target.value)}
              checked={language === 'georgia'}
            />

            <label
              htmlFor="georgia"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
            >
              Georgia
            </label>
          </div>
        </div>

        <div className="[&__label]:dark:text-gray-400 [&__label]:text-gray-800 ">
          <Switch
            color="indigo"
            label={darkMode ? 'light' : 'dark'}
            onChange={changeDarkMode}
            checked={darkMode}
            ripple={true}
          />
        </div>
      </div>
      {/* left */}
      <div className=" p-3  left-0 bottom-0 text-white m-4 fixed   ">
        <div className="flex">
          <a href="/">
            <button className=" px-4 py-2 mx-5 rounded-md dark:bg-[#374151] hover:shadow-lg dark:text-white bg-white text-black border-[#cccccc]  border-[1px]">
              Back
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
