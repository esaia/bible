import React from "react";
import useBibleContext from "../hooks/useBibleContext";

const Preview = ({ filteredData }) => {
  const { originalData } = useBibleContext();

  return (
    <div className="w-full max-w-[1200px]">
      {originalData?.bibleData &&
        filteredData?.bibleData.map((item, i) => {
          return (
            <div
              className="w-full bg-[#030215]    p-5  text-white text-xl mt-6 rounded-md  dark:bg-white dark:text-black"
              key={i}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: item.bv,
                }}
              ></div>
              {/* <h1>{item.bv}</h1> */}
              <p>
                {originalData.bibleNames[+item.wigni + 2]} {item.tavi}:
                {item.muxli}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Preview;
