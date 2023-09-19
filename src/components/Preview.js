import React from "react";
import useBibleContext from "../hooks/useBibleContext";
import { FacebookShareButton } from "react-share";
import { TbBrandStackshare } from "react-icons/tb";

const Preview = () => {
  const { filteredData, inputDispatch, inputValues } = useBibleContext();

  return (
    <div className="w-full ">
      {filteredData?.bibleData &&
        filteredData?.bibleData.map((item, i) => {
          return (
            <div
              className="w-full shadow-sm bg-[#eff1f3] max-w-6xl mx-auto  p-5  text-black text-xl mt-6 rounded-md  dark:bg-[#374151] dark:text-white "
              key={i}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: item.bv,
                }}
              ></div>
              {/* <h1>{item.bv}</h1> */}

              <div className="flex items-center justify-between">
                <p className="italic text-gray-700 dark:text-gray-400 text-[17px]">
                  {filteredData.bibleNames[+item.wigni + 2]} {item.tavi}:
                  {item.muxli}
                </p>
                {inputValues.phrase && (
                  <button
                    className="px-4 py-1 m-4 bg-[#e7dfdf] text-black dark:text-white dark:bg-gray-600 rounded-sm  select-none"
                    onClick={() => {
                      inputDispatch({
                        type: "SEPARATE_PREVIEW",
                        payload: item,
                      });
                    }}
                  >
                    separate
                  </button>
                )}
                <FacebookShareButton url={window.location.href}>
                  <TbBrandStackshare />
                </FacebookShareButton>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(Preview);
