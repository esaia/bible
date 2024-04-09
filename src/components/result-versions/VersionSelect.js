import React from 'react';
import { Checkbox } from '@material-tailwind/react';
import Select from 'react-select';
import { useBibleSettingContext } from '../../context/BibleSettingProvider';
import useData from '../../hooks/useData';

const VersionSelect = ({ title, activeLang, projectorLanguages, setProjectorLanguages }) => {
  const { versions, setVersions } = useBibleSettingContext();

  const { allVersions } = useData();

  const check = () => {
    const updatedState = {
      ...projectorLanguages,
      [activeLang]: !projectorLanguages[activeLang],
    };

    localStorage.setItem('projectorLanguages', JSON.stringify(updatedState));
    setProjectorLanguages(updatedState);
  };

  const updateVersion = e => {
    const updatedState = { ...versions, [activeLang]: e?.value };

    localStorage.setItem('versions', JSON.stringify(updatedState));
    setVersions(updatedState);
  };

  const findVesionByValue = versionValue => {
    const findVersion = allVersions?.[activeLang]?.find(v => v.value === versionValue);
    return findVersion;
  };

  return (
    <>
      <div className=" flex items-center ">
        <label className=" dark:text-white w-[130px]">{title}</label>
        <Checkbox id={title} onChange={check} checked={projectorLanguages[activeLang]} />
        <Select
          isDisabled={!projectorLanguages[activeLang]}
          options={allVersions[activeLang]}
          isSearchable={true}
          onChange={e => updateVersion(e)}
          className="my-react-select-container  pl-5 w-[300px]"
          classNamePrefix="my-react-select"
          value={{
            value: findVesionByValue(versions?.[activeLang])?.value || versions?.[activeLang],
            label: findVesionByValue(versions?.[activeLang])?.label || versions?.[activeLang],
            id: 'version',
          }}
          onMenuOpen={() => {
            // setTimeout(() => {
            //   debugger;
            // }, 1000);
          }}
        />
      </div>
    </>
  );
};

export default VersionSelect;
