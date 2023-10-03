import React, { createContext, useContext, useState } from "react";

const bibleSettingContext = createContext();

const BibleSettingProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkmode") === "true"
  );

  const [versions, setVersions] = useState(
    JSON.parse(localStorage.getItem("versions")) || {
      geo: "ახალი გადამუშავებული გამოცემა 2015",
      eng: "KJV King James Version",
      rus: "Синодальный перевод",
    }
  );

  return (
    <bibleSettingContext.Provider
      value={{
        darkMode,
        setDarkMode,
        versions,
        setVersions,
      }}
    >
      {children}
    </bibleSettingContext.Provider>
  );
};

export const useBibleSettingContext = () => {
  const data = useContext(bibleSettingContext);
  return data;
};

export default BibleSettingProvider;
