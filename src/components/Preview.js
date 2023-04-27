import React from "react";
import useBibleContext from "../hooks/useBibleContext";

const Preview = () => {
  const { filteredData } = useBibleContext();

  return (
    <div className="w-full ">
      {filteredData?.bibleData &&
        filteredData?.bibleData.map((item, i) => {
          return (
            <div
              className="w-full bg-[#030215] max-w-6xl mx-auto  p-5  text-white text-xl mt-6 rounded-md  dark:bg-[#374151] dark:text-white "
              key={i}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: item.bv,
                }}
              ></div>
              {/* <h1>{item.bv}</h1> */}
              <p>
                {filteredData.bibleNames[+item.wigni + 2]} {item.tavi}:
                {item.muxli}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Preview;
