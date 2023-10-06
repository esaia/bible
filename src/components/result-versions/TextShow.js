import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useData from '../../hooks/useData';

const TextShow = ({ showData, lang, fontSize }) => {
  const { bibleNames } = useData();
  const [fontSizeStr, setFontSizeStr] = useState('');

  useEffect(() => {
    let _fontSizeStr;

    switch (+fontSize) {
      case 1:
        _fontSizeStr = 'text-1xl';
        break;
      case 2:
        _fontSizeStr = 'text-2xl';
        break;
      case 3:
        _fontSizeStr = 'text-3xl';
        break;
      case 4:
        _fontSizeStr = 'text-4xl';
        break;
      case 5:
        _fontSizeStr = 'text-5xl';
        break;
      case 6:
        _fontSizeStr = 'text-6xl';
        break;
      case 7:
        _fontSizeStr = 'text-7xl';
        break;
      case 8:
        _fontSizeStr = 'text-8xl';
        break;
      case 9:
        _fontSizeStr = 'text-9xl';
        break;
      default:
        _fontSizeStr = 'text-5xl';
    }

    setFontSizeStr(_fontSizeStr);
  }, [fontSize]);

  const lastIndex = showData[lang].length - 1;
  const name = bibleNames[lang][+showData[lang][0]?.wigni + 2];
  const chapter = showData[lang][0]?.tavi;
  const muxli =
    showData[lang].length > 1
      ? `${showData[lang][0]?.muxli}-${showData[lang][lastIndex]?.muxli}`
      : showData[lang][0]?.muxli;

  const taviMuxli = `${name} ${chapter}:${muxli}`;

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
                  <p className={`showText ${fontSizeStr}`}>{item.bv}</p>
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
            <h3 className={`showText italic text-gray-300/90  ${fontSizeStr}`}>{taviMuxli}</h3>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TextShow;
