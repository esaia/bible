import React from "react";
import { Radio } from "@material-tailwind/react";

const Theme = ({ id, setThemeNumber, checked, src }) => {
  return (
    <div className="flex flex-wrap cursor-pointer">
      <Radio
        id={id}
        value={id}
        color="blue"
        onChange={(e) => setThemeNumber(e.target.value)}
        checked={checked}
      />
      <img src={src} alt="image" className="themeimg" />
    </div>
  );
};

export default Theme;
