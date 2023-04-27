import React from "react";

const TextShow = ({ result, showLanguage, lang, fontSize }) => {
  return (
    <>
      {result && showLanguage && (
        <div className="w-full">
          {result?.[lang].data.map((item) => {
            return (
              <div key={item.id}>
                <p
                  className={`showText

                  ${(() => {
                    switch (fontSize) {
                      case 1:
                        return "text-1xl";
                      case 2:
                        return "text-2xl";
                      case 3:
                        return "text-3xl";
                      case 4:
                        return "text-4xl";
                      case 5:
                        return "text-5xl";
                      case 6:
                        return "text-6xl";
                      case 7:
                        return "text-7xl";
                      case 8:
                        return "text-8xl";
                      case 8:
                        return "text-9xl";
                      default:
                        return "text-5xl";
                    }
                  })()}
                  
              `}
                >
                  {item.bv}
                </p>
              </div>
            );
          })}
          <h3 className="tavimuxli">{result?.[lang]?.tavimuxli}</h3>
        </div>
      )}
    </>
  );
};

export default TextShow;
