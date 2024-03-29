import React, { useState } from 'react';
import { BsRocketTakeoff } from 'react-icons/bs';
import { Button } from '@material-tailwind/react';
import SelectTheme from './SelectTheme';
import VersionSelect from './result-versions/VersionSelect';
import MadeBy from './result-versions/MadeBy';
import FramerMotionWrapper from './FramerMotionWrapper';
import { useBibleSettingContext } from '../context/BibleSettingProvider';
import RequestManagement from './RequestManagement';

const Versions = () => {
  const { onSave } = useBibleSettingContext();

  const [projectorLanguages, setProjectorLanguages] = useState(
    JSON.parse(localStorage?.getItem('projectorLanguages')) || {
      geo: false,
      eng: false,
      rus: false,
    },
  );

  const clearAll = () => {
    const updatedState = {
      geo: false,
      eng: false,
      rus: false,
    };
    setProjectorLanguages(updatedState);
    localStorage.setItem('projectorLanguages', JSON.stringify(updatedState));
  };

  return (
    <FramerMotionWrapper>
      <div className="mt-2 cursor-pointer flex justify-center items-center  gap-3 flex-col pt-12">
        <VersionSelect
          title={'Georgia'}
          activeLang={'geo'}
          projectorLanguages={projectorLanguages}
          setProjectorLanguages={setProjectorLanguages}
        />
        <VersionSelect
          title={'English'}
          activeLang={'eng'}
          projectorLanguages={projectorLanguages}
          setProjectorLanguages={setProjectorLanguages}
        />
        <VersionSelect
          title={'Russian'}
          activeLang={'rus'}
          projectorLanguages={projectorLanguages}
          setProjectorLanguages={setProjectorLanguages}
        />
        <RequestManagement />

        <div className="flex items-center justify-center gap-5  mb-5   w-full ">
          <Button
            onClick={() => onSave()}
            className="flex w-32 justify-center items-center gap-3 px-4 py-2 bg-green-600"
          >
            <BsRocketTakeoff width={200} height={400} className="text-5x cursor-pointer " />
            Show
          </Button>

          <Button className="flex items-center gap-3 text-md px-4 py-2 bg-red-600" onClick={clearAll}>
            Clear
          </Button>
        </div>

        <SelectTheme />

        <MadeBy />
      </div>
    </FramerMotionWrapper>
  );
};

export default Versions;
