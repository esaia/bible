import React, { useState } from 'react';
import { Switch } from '@material-tailwind/react';
import { FaFacebookMessenger, FaTelegram } from 'react-icons/fa';
import { useBibleSettingContext } from '../context/BibleSettingProvider';

const Documentation = () => {
  const { darkMode, setDarkMode } = useBibleSettingContext();
  const [language, setLanguage] = useState('');

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkmode', !darkMode);
  };

  return (
    <div className="w-full flex justify-center min-h-[100vh] dark:text-white  dark:bg-[#101828] font-Roboto ">
      <div className="w-full max-w-[800px]  px-10 py-14 my-6  bg-gray-100 dark:bg-[#161d2b] border border-gray-300 dark:border-gray-800 ">
        {language === 'geo' ? (
          <div className="font-banner">
            <h1 className=" text-center text-2xl mb-4">დოკუმენტაცია</h1>
            <p className="">
              ეს აპლიკაცია გამოიყენება ეკლესიაში ბიბლიის მუხლების გასაშვებად პროექტორზე. მისი გამოყენება ძალიან
              მარტივია.
            </p>
            <p className="mt-4">არის ორი მხარე. ერთია პანელი საიდანაც ვაკონტროლებთ ყველაფერს</p>
            <ul className="list-disc	py-3 px-7">
              <li> რომელი მუხლები გავიდეს </li>
              <li> რომელი თარგმანით </li>
              <li> რამხელა ფონტით </li>
              <li> რა ბექგრაუნდ სურათით </li>
            </ul>

            <p>
              {' '}
              <span className="text-red-400"> ამ მხარეს მხოლოდ შენ უნდა ხედავდე </span> და მეორე მხარე რომელსაც ვუშვებთ
              პროექტორზე.
            </p>
            <div className="flex items-center gap-4 my-4 flex-col md:flex-row">
              <img src="/images/bibledark.webp" alt="bibleverse" className="flex-1 md:w-6/12 h-[200px] object-cover" />
              <img src="/images/show.jpg" alt="bibleverse" className="flex-1 md:  w-6/12 h-[200px] object-cover" />
            </div>
            <img src="/images/filteres.jpeg" alt="filteres" className="object-contain w-full py-5" />
            <p className="">
              1. პირველი ირჩევ ენას, რომელ ენაზეც გინდა რომ დაინახო მუხლები.{' '}
              <span className="text-red-400">ეს არ ცვლის პროექტორზე გასულ ენას! </span>
              <br />
              <br />
              2. იმის მიხედვით თუ რომელი ენა აირჩიე გამოჩნდება ვერსიები. აირჩევ სასურველ ვერსიას.{' '}
              <span className="text-red-400">კიდევ ერთხელ ეს არ ცვლის პროექტორზე გასულ ვერსიას! </span>
              <img src="/images/versia.jpeg" alt="filteres" className="object-contain w-[250px] py-5" />
              <br />
              3. შემდეგი ნაბიჯია წიგნის, თავის და მუხლის არჩევა. თუ რამოდენიმე მუხლის ჩვენება გინდა ერთდროულად "მუხლი
              (მდე)"-ში ირჩევ თუ სადამდე გინდა მუხლები აჩვენოს. შედეგი ავტომატურად გამოჩნდება.
            </p>
            <br />
            <hr />
            <br />
            <h2 className="font-bold mb-1">როგორ ვაჩვენო პროექტორზე?</h2>
            <p>
              დაბლითა მარჯვენა კუთხეში დაინახავ ღილაკს "Open Present View" დააჭირე და გადაგიყვანს ახალ ტაბზე. ეს გვერდი
              უნდა აჩვენო პროექტორზე. იმისათვის რომ ბრაუზერის ზედა მხარე არ გამოჩნდეს თუ ვინდოუსზე ხარ დააჭირე F11-ს ან
              დაბლითა მარჯვენა კუთხეში აქვს გადიდების იკონი.
              <br />
              <br />
              იმისთვის რომ სასურველი ტექსტი სასურველ ენაზე გამოჩნეს დაბრუნდი ისევ მთავარ გვერდზე, უნდა აირჩიო ენა და
              შესაბამისი ვერსიები და show ღილაკს დააწექი. ასევე შეგიძლია აკონტროლო ფონტის ზომა.
            </p>
            <img src="/images/lang.jpeg" alt="filteres" className="object-contain w-[400px] py-5" />
            <p>ამ განყოფილებაშ კი ირჩევთ სასურველ ბექგრაუნდს</p>
            <img src="/images/backg.jpeg" alt="filteres" className="object-contain w-[400px] py-5" />
            <div
              className="p-4 mb-4  text-black  rounded-lg bg-green-50 dark:bg-gray-800 dark:text-white mt-3"
              role="alert"
            >
              ყველა ცვლილება შენახული იქნება ბრაუზერის localStorage-ში. თუ რაიმემ გაჭედა და არ მუშაობს ცადეთ შემდეგი
              მეთოდები:
            </div>
            <ul>
              <li className="dark:text-white ">
                1. გაასუფთავეთ localstorage. გაეცანით სტატიას{' '}
                <a href="https://doc.arcgis.com/en/power-bi/get-started/clear-browser-storage.htm">link</a>
              </li>
              <li className="dark:text-white ">2. დაარეფრეშეთ გვერდი სადაც უშვებთ მუხლებს</li>
              <li className="dark:text-white  ">
                <p>3. დამატებით შენიშვნებისთვის / იდეებისთვის მომწერეთ მესენჯერზე / ტელეგრამზე </p>{' '}
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
          </div>
        ) : (
          <> hello world</>
        )}
      </div>

      {/* Fixed */}

      <div className=" p-3  right-0 bottom-0 text-white m-4 fixed  ">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2 cursor-pointer">
            <input
              defaultChecked
              id="default-radio-1"
              type="radio"
              value="eng"
              onChange={e => setLanguage(e.target.value)}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
            >
              English
            </label>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <input
              id="default-radio-2"
              type="radio"
              value="geo"
              name="default-radio"
              onChange={e => setLanguage(e.target.value)}
              className="w-4 h-4 outline-none ring-0  text-blue-600 bg-gray-100 border-gray-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
            >
              ქართულად
            </label>
          </div>
        </div>

        <div className="flex">
          <Switch
            color="indigo"
            label={darkMode ? 'light' : 'dark'}
            onChange={changeDarkMode}
            checked={darkMode}
            ripple={true}
          />
        </div>
      </div>

      {/* left */}
      <div className=" p-3  left-0 bottom-0 text-white m-4 fixed  ">
        <div className="flex">
          <a href="/">
            <button className=" px-4 py-2 mx-5 dark:bg-[#374151] hover:shadow-lg dark:text-white bg-white text-black border-[#cccccc]  border-[1px]">
              Edit
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
