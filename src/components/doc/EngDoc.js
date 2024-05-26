import React from 'react';
import { FaFacebookMessenger, FaTelegram } from 'react-icons/fa';
import Donation from '../Donation';

const GeoDoc = () => {
  return (
    <div>
      <div className="font-valera">
        <h1 className="text-center text-2xl mb-4 font-bold">Documentation</h1>
        <p className="">
          This application is used in churches to <b> display Bible verses </b> on a projector. It is very easy to use.
        </p>
        <p className="mt-4">It has two sides. One is the panel from where we control everything:</p>
        <ul className="list-disc py-3 px-7">
          <li> Which verses to display </li>
          <li> Which translation to use </li>
          <li> Which version </li>
          <li> What background image to use </li>
        </ul>
        <p>You only should see this side 1 and the side 2 is what we project.</p>

        <div className="flex items-center gap-4 my-4 flex-col md:flex-row md:h-[200px]  mb-20">
          <div className="w-full h-full">
            <span className="text-4xl">1</span>

            <img src="/images/bibledark.webp" alt="bibleverse" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <span className="text-4xl">2</span>

            <img src="/images/show.jpg" alt="bibleverse" className="w-full h-full" />
          </div>
        </div>

        <h2 className="font-bold my-2 text-[20px]">How to Display on the Projector?</h2>
        <hr />
        <br />

        <p>
          If you have already selected the desired verse, it is time to display it on the projector. In the lower right
          corner, you will see a button "Open Present View." Click it, and it will take you to a new tab. This page
          should be displayed on the projector.
          <br />
          <br />
          To display the desired text in the desired language, return to the main page, choose the language and the
          corresponding versions, and click the show button.
        </p>
        <img src="/images/versions.gif" alt="filters" className="object-contain w-[400px] py-5" />
        <p>In this section, you can choose the background.</p>
        <img src="/images/backg.jpeg" alt="filters" className="object-contain w-[400px] py-5" />
        <div className="p-4 mb-4 text-black rounded-lg bg-green-50 dark:bg-gray-800 dark:text-white mt-3" role="alert">
          All changes will be saved in the browser's localStorage. If something is stuck and not working, try the
          following methods:
        </div>

        <ul>
          <li className="dark:text-white ">
            1. Clear the local storage. Check out the instructions{' '}
            <a href="https://doc.arcgis.com/en/power-bi/get-started/clear-browser-storage.htm" className="underline">
              here
            </a>
            .
          </li>
          <li className="dark:text-white ">2. Refresh the page where you are displaying the verses.</li>
          <li className="dark:text-white  ">
            <p>3. For additional inquiries / ideas, contact via Messenger / Telegram:</p>{' '}
            <div className="flex items-center pt-2">
              <a
                href="https://www.facebook.com/esaia.gafrindashvili/"
                className="w-full flex items-center justify-center gap-2 mt-2 "
                target="noreferrer"
              >
                <button>Messenger</button>
                <FaFacebookMessenger />
              </a>
              <a
                href="https://t.me/esoeso27"
                className="w-full flex items-center justify-center gap-2 mt-2 "
                target="noreferrer"
              >
                <button>Telegram</button>
                <FaTelegram />
              </a>
            </div>
          </li>
        </ul>

        <div className="my-10">
          <Donation lang="en" />
        </div>
      </div>
    </div>
  );
};

export default GeoDoc;
