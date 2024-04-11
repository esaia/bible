import React from 'react';
import Select from 'react-select';
import useBibleContext from '../hooks/useBibleContext';
import useData from '../hooks/useData';
import { motion } from 'framer-motion';

const Header = () => {
  const { inputValues, inputDispatch, refetch } = useBibleContext();
  const { languages, versions, book, chapter, verse, versemde, allVersions } = useData();

  const changeInputValue = (e, triggleAction) => {
    inputDispatch({
      type: 'CHANGE_INPUT_VALUE',
      payload: { event: e, triggleAction },
    });
  };

  const submitSearchForm = e => {
    e.preventDefault();
    const inputValueBlankAndFetch = async () => {
      await inputDispatch({ type: 'MAKE_BLANK' });
      refetch();
    };

    inputValueBlankAndFetch();
  };

  const findVersionByValue = versionValue => {
    const findedVersion = allVersions[inputValues?.language || 'geo'].find(version => version.value === versionValue);
    return findedVersion;
  };
  return (
    <>
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            delay: '0.4',
          }}
        >
          <div className="flex justify-start items-center flex-grow-4 gap-3 my-4   2xl:flex-nowrap flex-wrap">
            <Select
              placeholder={'language'}
              defaultValue={{
                value: inputValues?.language,
                label: inputValues?.language,
                id: 'language',
              }}
              options={languages}
              isSearchable={true}
              onChange={(e, triggleAction) => changeInputValue(e, triggleAction)}
              className="my-react-select-container  w-[100px]  flex-auto z-50"
              classNamePrefix="my-react-select"
            />

            {/* {allVersions.length > 0 && ( */}
            <Select
              value={
                findVersionByValue(inputValues?.version)?.label
                  ? {
                      id: 'versions',
                      label: findVersionByValue(inputValues?.version)?.label,
                      value: findVersionByValue(inputValues?.version)?.value,
                    }
                  : { value: 7979, label: 'NASB New American Standard Bible', id: 'version' }
              }
              // defaultInputValue={{ value: 7979, label: 'NASB New American Standard Bible', id: 'version' }}
              placeholder={'Version'}
              options={versions}
              isSearchable={true}
              onChange={(e, triggleAction) => changeInputValue(e, triggleAction)}
              className="my-react-select-container w-[300px]  flex-auto  z-50"
              classNamePrefix="my-react-select"
            />
            {/* )} */}

            <Select
              placeholder={'Book'}
              value={book.flatMap(item => item?.options).find(option => option?.value === inputValues?.book)}
              options={book}
              isSearchable={true}
              onChange={(e, triggleAction) => changeInputValue(e, triggleAction)}
              className="my-react-select-container w-[300px]  flex-auto  "
              classNamePrefix="my-react-select"
            />

            <Select
              value={chapter ? chapter?.find(option => option?.label === inputValues?.chapter || null) : null}
              placeholder={'Chapter'}
              options={chapter}
              isSearchable={true}
              isClearable={true}
              onChange={(e, triggleAction) => changeInputValue(e, triggleAction)}
              className="my-react-select-container w-[180px] flex-auto "
              classNamePrefix="my-react-select"
            />

            <Select
              value={verse?.filter(option => option?.label === inputValues?.verse || null)}
              // defaultValue={verse?.filter(option => option?.label === 1)}
              placeholder={'Verse - (from)'}
              options={verse}
              isSearchable={true}
              isClearable={true}
              onChange={(e, triggleAction) => changeInputValue(e, triggleAction)}
              className="my-react-select-container w-[180px] flex-auto"
              classNamePrefix="my-react-select"
            />

            {versemde && (
              <Select
                value={versemde?.filter(option => option?.label === inputValues?.versemde || null)}
                placeholder={'(To)'}
                options={versemde}
                isSearchable={true}
                isClearable={true}
                isDisabled={inputValues?.verse ? false : true}
                onChange={(e, triggleAction) => changeInputValue(e, triggleAction)}
                className="my-react-select-container w-[180px] flex-auto"
                classNamePrefix="my-react-select"
              />
            )}

            <form
              onSubmit={e => submitSearchForm(e)}
              className="   w-[300px] h-[37px] rounded-[3px] border-[1.2px] border-gray-300   flex-auto dark:bg-[#374151] dark:text-white "
            >
              <input
                onChange={e => {
                  inputDispatch({
                    type: 'PHRASE_INPUT',
                    payload: { event: e },
                  });
                }}
                value={inputValues.phrase}
                type="text"
                className="outline-none  w-full bg-transparent h-full p-3 "
              />
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
