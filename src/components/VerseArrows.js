import React from 'react';
import useData from '../hooks/useData';
import useBibleContext from '../hooks/useBibleContext';
import { useSearchParams } from 'react-router-dom';
import { useBibleSettingContext } from '../context/BibleSettingProvider';

import { TiArrowRightThick, TiArrowLeftThick } from 'react-icons/ti';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md';

const VerseArrows = () => {
  const { inputDispatch, inputValues } = useBibleContext();
  const { onSave } = useBibleSettingContext();
  const { verse } = useData();

  const [searchParams, setSearchParams] = useSearchParams();

  const left = () => {
    searchParams.delete('verse');
    searchParams.delete('versemde');

    const decreaseBy = inputValues.versemde - inputValues.verse + 1;

    if (inputValues.versemde) {
      searchParams.append('verse', inputValues.verse - decreaseBy);
      // searchParams.append('versemde', inputValues.versemde - decreaseBy);
      inputDispatch({ type: 'DECREASE_VERSE', payload: decreaseBy });
    } else {
      searchParams.append('verse', inputValues.verse - 1);
      inputDispatch({ type: 'DECREASE_VERSE', payload: 1 });
      inputDispatch({ type: 'VERSEMDE_NULL' });
    }

    setSearchParams(searchParams);
    searchParams.sort();
  };

  const right = () => {
    if (inputValues.verse === verse?.length) {
      return;
    }
    searchParams.delete('verse');
    searchParams.delete('versemde');

    const increaseBy = inputValues.versemde - inputValues.verse + 1;
    if (inputValues.versemde && inputValues.verse + increaseBy < verse?.length) {
      searchParams.append('verse', inputValues.verse + increaseBy);
      // searchParams.append('versemde', inputValues.verse + increaseBy);
      inputDispatch({ type: 'INCREASE_VERSE', payload: increaseBy });
    } else {
      searchParams.append('verse', inputValues.verse + 1);

      inputDispatch({ type: 'VERSEMDE_NULL' });
      inputDispatch({ type: 'INCREASE_VERSE', payload: 1 });
    }

    searchParams.sort();
    setSearchParams(searchParams);
  };

  return (
    <div className="w-full flex justify-end items-center  select-none mb-4">
      {!inputValues.versemde ? (
        <div className=" flex justify-end gap-3">
          <TiArrowLeftThick
            className="text-3xl cursor-pointer text-gray-300 dark:text-[#374151] hover:text-gray-500 hover:dark:text-[#282f3b]"
            onClick={left}
          />
          <TiArrowRightThick
            className="text-3xl cursor-pointer text-gray-300 dark:text-[#374151] hover:text-gray-500 hover:dark:text-[#282f3b]"
            onClick={right}
          />

          <button
            onClick={() => onSave()}
            className="bg-gray-200 w-20 rounded-sm px-3 cursor-pointer text-black dark:text-gray-200  dark:bg-[#374151] hover:bg-gray-400 hover:dark:bg-[#282f3b]"
          >
            Show
          </button>
        </div>
      ) : (
        <div className=" flex justify-end gap-3">
          <MdKeyboardDoubleArrowLeft
            onClick={left}
            className="text-3xl cursor-pointer text-gray-400 dark:text-[#4e596b] hover:text-gray-500 hover:dark:text-[#282f3b]"
          />

          <MdKeyboardDoubleArrowRight
            onClick={right}
            className="text-3xl cursor-pointer text-gray-400 dark:text-[#4e596b] hover:text-gray-500 hover:dark:text-[#282f3b]"
          />

          <button
            onClick={() => onSave()}
            className="bg-gray-200 w-20 rounded-sm px-3 cursor-pointer text-black dark:text-gray-200  dark:bg-[#374151] hover:bg-gray-400 hover:dark:bg-[#282f3b]"
          >
            Show
          </button>
        </div>
      )}
    </div>
  );
};

export default VerseArrows;
