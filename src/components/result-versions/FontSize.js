import React, { useEffect, useState } from "react";
import useData from "../../hooks/useData";
import useBibleContext from "../../hooks/useBibleContext";
import Select from "react-select";

const FontSize = () => {
  const { isLanguage } = useBibleContext();
  const { fontSizes } = useData();
  const [fontSize, setFontSize] = useState(
    +JSON.parse(localStorage.getItem("fontSize")) || 5
  );

  useEffect(() => {
    localStorage.setItem("languages", JSON.stringify(isLanguage));
  }, [isLanguage, fontSize]);

  return (
    <div>
      <Select
        options={fontSizes}
        placeholder="font"
        defaultValue={{
          value: "5",
          label: "5",
          id: "fontSize",
        }}
        onChange={(e) => {
          localStorage.setItem("fontSize", JSON.stringify(+e.value));
          setFontSize(+e.value);
        }}
        className="my-react-select-container w-[100px] flex-auto"
        classNamePrefix="my-react-select"
        value={{
          value: fontSize,
          label: fontSize,
          id: "version",
        }}
      />
    </div>
  );
};

export default FontSize;
