import { Radio } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const SelectTheme = () => {
  const [themeNumber, setThemeNumber] = useState(
    localStorage.getItem("themeNumber")
  );

  useEffect(() => {
    localStorage.setItem("themeNumber", themeNumber);
  }, [themeNumber]);

  return (
    <div>
      <div className=" grid grid-cols-2 grid-rows-5 gap-4 justify-center items-center md:grid-cols-3 ">
        <div className="flex flex-wrap">
          <Radio
            id="blue"
            value="1"
            name="color"
            color="blue"
            onChange={(e) => {
              setThemeNumber(e.target.value);
            }}
            checked={themeNumber === "1"}
          />
          <img
            src="./images/1.jpeg"
            alt="image"
            className="w-20 h-full object-cover"
          />
        </div>

        <div className="flex">
          <Radio
            id="blue"
            value="2"
            name="color"
            color="red"
            onChange={(e) => {
              setThemeNumber(e.target.value);
            }}
            checked={themeNumber === "2"}
          />
          <img
            src="./images/2.jpeg"
            alt="image"
            className="w-20 h-full object-cover"
          />
        </div>

        <div className="flex">
          <Radio
            id="blue"
            value="3"
            name="color"
            color="red"
            onChange={(e) => {
              setThemeNumber(e.target.value);
            }}
            checked={themeNumber === "3"}
          />
          <img
            src="./images/3.jpeg"
            alt="image"
            className="w-20 h-full object-cover"
          />
        </div>

        <div className="flex">
          <Radio
            id="blue"
            value="4"
            name="color"
            color="red"
            onChange={(e) => {
              setThemeNumber(e.target.value);
            }}
            checked={themeNumber === "4"}
          />
          <img
            src="./images/4.jpeg"
            alt="image"
            className="w-20 h-full object-cover"
          />
        </div>

        <div className="flex">
          <Radio
            id="blue"
            value="5"
            name="color"
            color="red"
            onChange={(e) => {
              setThemeNumber(e.target.value);
            }}
            checked={themeNumber === "5"}
          />
          <img
            src="./images/5.jpeg"
            alt="image"
            className="w-20 h-full object-cover"
          />
        </div>

        <div className="flex">
          <Radio
            id="blue"
            value="6"
            name="color"
            color="red"
            onChange={(e) => {
              setThemeNumber(e.target.value);
            }}
            checked={themeNumber === "6"}
          />
          <img
            src="./images/6.jpeg"
            alt="image"
            className="w-20 h-full object-cover"
          />
        </div>

        <div className="flex">
          <Radio
            id="blue"
            value="7"
            name="color"
            color="red"
            onChange={(e) => {
              setThemeNumber(e.target.value);
            }}
            checked={themeNumber === "7"}
          />
          <img
            src="./images/7.jpeg"
            alt="image"
            className="w-20 h-full object-cover"
          />
        </div>

        <div className="flex">
          <Radio
            id="blue"
            value="8"
            name="color"
            color="red"
            onChange={(e) => {
              setThemeNumber(e.target.value);
            }}
            checked={themeNumber === "8"}
          />
          <img
            src="./images/8.jpeg"
            alt="image"
            className="w-20 h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectTheme;
