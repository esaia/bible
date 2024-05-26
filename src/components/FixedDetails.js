import React from 'react';
import { Switch } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { useBibleSettingContext } from '../context/BibleSettingProvider';

const FixedDetails = () => {
  const { darkMode, setDarkMode } = useBibleSettingContext();

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkmode', !darkMode);
  };

  return (
    <div>
      {/* Right */}

      <motion.div
        initial={{ opacity: 0, marginBottom: 2 }}
        animate={{ opacity: 1, marginBottom: 0 }}
        transition={{
          type: 'spring',
          delay: '2.2',
          stiffness: 50,
        }}
      >
        <div className=" p-3  right-0 bottom-0 text-white m-4 fixed   ">
          <div className="flex">
            <a href="/show" target="_blank">
              <button className=" px-4 py-2 mx-5 rounded-md dark:bg-[#374151] hover:shadow-lg dark:text-white bg-white text-black border-[#cccccc]  border-[1px]">
                Open Present View
              </button>
            </a>
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
        </div>

        {/* left */}
        <div className=" p-3   bottom-0 text-white m-4 left-0 fixed     ">
          <div className="flex">
            <a href="/doc" target="_blank">
              <button className=" px-4 py-2 mx-5 rounded-md dark:bg-[#374151] hover:shadow-lg dark:text-white bg-white text-black border-[#cccccc]  border-[1px]">
                Documentation
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FixedDetails;
