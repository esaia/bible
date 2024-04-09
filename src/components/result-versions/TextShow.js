import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useData from '../../hooks/useData';

const TextShow = ({ showData, lang }) => {
  const { bibleNames } = useData();
  const [taviMuxli, setTaviMuxli] = useState('');

  useEffect(() => {
    if (showData) {
      const lastIndex = showData[lang]?.length - 1;
      const name = bibleNames[lang][+showData[lang][0]?.book + 2];
      const chapter = showData[lang][0]?.chapter;
      const muxli =
        showData[lang].length > 1
          ? `${showData[lang][0]?.verse}-${showData[lang][lastIndex]?.verse}`
          : showData[lang][0]?.verse;

      setTaviMuxli(`${name} ${chapter}:${muxli}`);
    }
  }, [showData]);

  return (
    <AnimatePresence>
      {showData[lang].length !== 0 && (
        <div className="w-full">
          {showData[lang].map((item, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.3, type: 'tween' }}
              >
                <div key={item.id}>
                  <p className={`showText `}>{item.bv}</p>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3, type: 'tween' }}
          >
            <h3 className={`showText italic text-gray-300/90 `}>{taviMuxli}</h3>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TextShow;
