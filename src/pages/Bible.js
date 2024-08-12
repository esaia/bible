import React from 'react';
import 'react-awesome-button/dist/styles.css';
import Header from '../components/Header';
import useBibleContext from '../hooks/useBibleContext';
import Skeleton from '../components/Skeleton';
import Preview from '../components/Preview';
import DarkModeSwitcher from '../components/UiComponents/DarkModeSwitcher';

const Bible = () => {
  const { filteredData, inputValues, isFetching } = useBibleContext();

  return (
    <div className=" w-full min-h-[100vh] flex justify-start items-center flex-col p-4   max-w-[2000px] m-auto ">
      <div className="flex flex-col items-center w-full ">
        <Header />
        <div className="flex justify-end items-end w-full">
          <DarkModeSwitcher />
        </div>

        <div className="min-h-[200px] w-full">
          {isFetching ? (
            <Skeleton />
          ) : filteredData && filteredData?.bibleData?.length === 0 && inputValues.phrase ? (
            <p className="dark:text-white p-3 text-2xl text-center mt-10">No matches found: "{inputValues.phrase}"</p>
          ) : (
            <>
              <Preview showWholeChapter={true} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bible;
