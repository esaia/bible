import { Radio } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Theme from "./result-versions/Theme";

const SelectTheme = () => {
  const [themeNumber, setThemeNumber] = useState(
    localStorage.getItem("themeNumber")
  );

  useEffect(() => {
    localStorage.setItem("themeNumber", themeNumber);
  }, [themeNumber]);

  return (
    <div>
      <div className=" grid grid-cols-3 grid-rows-5 gap-4 justify-center items-center md:grid-cols-4 xl:grid-cols-5 ">
        <Theme
          id="1"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "1"}
          src="./images/1.jpeg"
        />

        <Theme
          id="2"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "2"}
          src="./images/2.jpeg"
        />

        <Theme
          id="3"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "3"}
          src="./images/3.jpeg"
        />

        <Theme
          id="4"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "4"}
          src="./images/4.jpeg"
        />

        <Theme
          id="5"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "5"}
          src="./images/5.jpeg"
        />
        <Theme
          id="6"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "6"}
          src="./images/6.jpeg"
        />

        <Theme
          id="7"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "7"}
          src="./images/7.jpeg"
        />
        <Theme
          id="8"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "8"}
          src="./images/8.jpeg"
        />

        <Theme
          id="9"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "9"}
          src="./images/9.jpeg"
        />

        <Theme
          id="10"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "10"}
          src="./images/10.jpeg"
        />

        <Theme
          id="11"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "11"}
          src="./images/11.jpeg"
        />

        <Theme
          id="12"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "12"}
          src="./images/12.jpeg"
        />

        <Theme
          id="13"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "13"}
          src="./images/13.jpeg"
        />

        <Theme
          id="14"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "14"}
          src="./images/14.jpeg"
        />

        <Theme
          id="15"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "15"}
          src="./images/15.jpeg"
        />

        <Theme
          id="16"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "16"}
          src="./images/16.jpeg"
        />

        <Theme
          id="17"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "17"}
          src="./images/17.jpeg"
        />

        <Theme
          id="18"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "18"}
          src="./images/18.jpeg"
        />

        <Theme
          id="19"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "19"}
          src="./images/19.jpeg"
        />

        <Theme
          id="20"
          setThemeNumber={setThemeNumber}
          checked={themeNumber === "20"}
          src="./images/20.jpeg"
        />
      </div>
    </div>
  );
};

export default SelectTheme;
