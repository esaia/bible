import React from 'react';
import { Radio } from '@material-tailwind/react';

const Theme = ({ id, setThemeNumber, checked, src }) => {
  return (
    <>
      <div className="flex flex-wrap cursor-pointer">
        <Radio id={id} value={id} color="blue-gray" onChange={e => setThemeNumber(e.target.value)} checked={checked} />

        <label htmlFor={id} className="cursor-pointer">
          <img src={src} alt="theme img" className="themeimg rounded-md " />
        </label>
      </div>
    </>
  );
};

export default Theme;
