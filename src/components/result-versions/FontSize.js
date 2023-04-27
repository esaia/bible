import React, { useEffect, useState } from "react";
import useData from "../../hooks/useData";
import useBibleContext from "../../hooks/useBibleContext";
import Select from "react-select";

const FontSize = () => {
  const { isLanguage, inputValues, inputDispatch } = useBibleContext();
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
          value: inputValues.fontSize,
          label: inputValues.fontSize,
          id: "fontSize",
        }}
        onChange={(e) =>
          inputDispatch({ type: "CHANGE_FONT_SIZE", payload: +e.value })
        }
        className="my-react-select-container w-[100px] flex-auto"
        classNamePrefix="my-react-select"
        value={{
          value: inputValues.fontSize,
          label: inputValues.fontSize,
          id: "version",
        }}
      />
    </div>
  );
};

export default FontSize;
