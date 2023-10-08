import React, { useState } from 'react';

import { Dialog, Checkbox } from '@material-tailwind/react';

const RequestManagement = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [requestManagement, setRequestManagement] = useState(
    JSON.parse(localStorage.getItem('requestManagement')) || { geo: false, eng: false, rus: false },
  );

  const changeRadioButton = e => {
    const updatedState = { ...requestManagement, [e.target.name]: !JSON.parse(e.target.value) };
    setRequestManagement(updatedState);
    localStorage.setItem('requestManagement', JSON.stringify(updatedState));
  };

  return (
    <div className="flex items-center justify-start gap-2 mt-2">
      <p
        className="dark:text-white
      "
      >
        Requests Management:
      </p>
      <div className="flex items-center justify-start">
        <p className="dark:text-white/30 text-black/30">geo:</p>
        <Checkbox
          id="geo"
          name="geo"
          color="teal"
          value={requestManagement.geo}
          checked={requestManagement.geo}
          onChange={e => changeRadioButton(e)}
        />

        <p className="dark:text-white/30 text-black/30">eng:</p>
        <Checkbox
          id="eng"
          name="eng"
          color="teal"
          value={requestManagement.eng}
          checked={requestManagement.eng}
          onChange={e => changeRadioButton(e)}
        />

        <p className="dark:text-white/30 text-black/30">rus:</p>
        <Checkbox
          id="rus"
          name="rus"
          color="teal"
          value={requestManagement.rus}
          checked={requestManagement.rus}
          onChange={e => changeRadioButton(e)}
        />
      </div>

      <>
        <button
          className="dark:bg-[#374151] dark:text-white bg-white border border-black text-black px-3 py-2 cursor-pointer rounded-md text-sm"
          onClick={handleOpen}
        >
          what is requests management?
        </button>

        <Dialog open={open} handler={handleOpen}>
          <div className="w-full h-fit  p-5 rounded-md">
            <h3 className="font-bold text-black text-2xl">Request Management</h3>
            <p className="text-gray-700 mt-2 dark:text-4xl ">
              When you click show button, it is expencive operation, 3 requests are made for Georgian, English and
              Russian languages.
            </p>

            <img src="/images/requestsManagement.jpeg" alt="" className="w-60 my-3" />

            <p>
              Please manage your requests through the checkboxes. For instance, if you use only Georgian and English
              languages, you should only select these languages. This way you will avoid sending unnecessary requests
              and the performance will be better.
            </p>

            <img src="/images/showHide.jpeg" alt="" className="w-60 my-3" />

            <p>These blue checkboxes are just for showing or hiding text in present view.</p>
            <div className="flex items-end justify-end">
              <button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1 items-end  text-right text-black font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </Dialog>
      </>
    </div>
  );
};

export default RequestManagement;
