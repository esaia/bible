import React, { useEffect } from "react";
import useBibleContext from "../hooks/useBibleContext";

const Show = () => {
  const { result, isLanguage } = useBibleContext();

  useEffect(() => {
    const handleStorageChange = () => {
      window.location.reload(false);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  console.log(result);
  return (
    <div className="max-h-[100vh] h-[100vh] flex justify-center items-start px-20 flex-col showbackground gap-20 bg-blend-overlay bgblind">
      {/* ENG */}

      {result && isLanguage.eng && (
        <div className="px-20">
          {result?.eng.data.map((item) => {
            return (
              <div key={item.id}>
                <p className="showText  ">{item.bv}</p>
              </div>
            );
          })}
          <h3 className="tavimuxli">{result?.eng?.tavimuxli}</h3>
        </div>
      )}

      {/* GEO */}
      {result && isLanguage.geo && (
        <div className="px-20">
          {result?.geo.data.map((item) => {
            return (
              <div key={item.id}>
                <p className="showText   ">{item.bv}</p>
              </div>
            );
          })}
          <h3 className="tavimuxli">{result?.geo?.tavimuxli}</h3>
        </div>
      )}

      {/* rus */}
      {result && isLanguage.rus && (
        <div className="px-20">
          {result?.rus.data.map((item) => {
            return (
              <div key={item.id}>
                <p className="showText   ">{item.bv}</p>
              </div>
            );
          })}
          <h3 className="tavimuxli">{result?.rus?.tavimuxli}</h3>
        </div>
      )}
    </div>
  );
};

export default Show;
