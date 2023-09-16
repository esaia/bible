import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextShow = ({ result, showLanguage, lang, fontSize }) => {
  return (
    <AnimatePresence>
      {result && showLanguage && (
        <div className="w-full">
          {result?.[lang].data.map((item, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.3, type: "tween" }}
              >
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
                        case 9:
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
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3, type: "tween" }}
          >
            <h3
              className={`
              showText italic text-gray-300/90
                    ${(() => {
                      switch (fontSize) {
                        case 1:
                          return "text-1xl";
                        case 2:
                          return "text-1xl";
                        case 3:
                          return "text-2xl";
                        case 4:
                          return "text-3xl";
                        case 5:
                          return "text-4xl";
                        case 6:
                          return "text-5xl";
                        case 7:
                          return "text-6xl";
                        case 8:
                          return "text-7xl";
                        case 9:
                          return "text-8xl";
                        default:
                          return "text-4xl";
                      }
                    })()}

            `}
            >
              {result?.[lang]?.tavimuxli}
            </h3>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TextShow;
