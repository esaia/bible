import React from 'react';
import { useBibleSettingContext } from '../../context/BibleSettingProvider';
import { Switch } from '@material-tailwind/react';

const DarkModeSwitcher = () => {
  const { darkMode, setDarkMode } = useBibleSettingContext();

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkmode', !darkMode);
  };

  return (
    <div className="[&__label]:dark:text-gray-400 [&__label]:text-gray-800 ">
      <Switch
        color="indigo"
        label={darkMode ? 'light' : 'dark'}
        onChange={changeDarkMode}
        checked={darkMode}
        ripple={true}
      />
    </div>
  );
};

export default DarkModeSwitcher;
