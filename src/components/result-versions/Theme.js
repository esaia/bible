import React from "react";
import { Radio } from "@material-tailwind/react";
import FramerMotionWrapper from "../FramerMotionWrapper";

const Theme = ({ id, setThemeNumber, checked, src }) => {
  return (
    <FramerMotionWrapper>
      <div className="flex flex-wrap cursor-pointer">
        <Radio
          id={id}
          value={id}
          color="blue"
          onChange={(e) => setThemeNumber(e.target.value)}
          checked={checked}
        />

        <img src={src} alt="theme img" className="themeimg" />
      </div>
    </FramerMotionWrapper>
  );
};

export default Theme;
