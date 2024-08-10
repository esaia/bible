import React from 'react';
import { FaFacebookMessenger, FaTelegram } from 'react-icons/fa';
import Donation from '../Donation';

const GeoDoc = () => {
  return (
    <div>
      <div className="font-valera">
        <h1 className=" text-center text-2xl mb-4 font-bold">დოკუმენტაცია</h1>
        <p className="">
          ეს აპლიკაცია გამოიყენება ეკლესიაში <b> ბიბლიის მუხლების გასაშვებად </b> პროექტორზე. მისი გამოყენება ძალიან
          მარტივია.
        </p>
        <p className="mt-4">მას აქვს ორი მხარე. ერთია პანელი საიდანაც ვაკონტროლებთ ყველაფერს</p>
        <ul className="list-disc	py-3 px-7">
          <li> რომელი მუხლები გავიდეს </li>
          <li> რომელი თარგმანით </li>
          <li> რომელი ვერსიის </li>
          <li> რა ბექგრაუნდ სურათით </li>
        </ul>

        <p>
          {' '}
          <span className="text-red-400"> ამ მხარეს მხოლოდ შენ უნდა ხედავდე </span> და მეორე მხარე რომელსაც ვუშვებთ
          პროექტორზე.
        </p>

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

        <h2 className="font-bold mb-1 text-[20px]">როგორ ვაჩვენო პროექტორზე?</h2>
        <hr />
        <br />

        <p>
          თუ უკვე აირჩიე სასურველი მუხლი მაშინ დროა პროექტორზეც გაუშვა. დაბლითა მარჯვენა კუთხეში დაინახავ ღილაკს "Open
          Present View" დააჭირე და გადაგიყვანს ახალ ტაბზე. ეს გვერდი უნდა აჩვენო პროექტორზე.
          <br />
          <br />
          იმისთვის რომ სასურველი ტექსტი სასურველ ენაზე გამოჩნეს დაბრუნდი ისევ მთავარ გვერდზე, უნდა აირჩიო ენა და
          შესაბამისი ვერსიები და show ღილაკს დააწვე.
        </p>
        <img src="/images/versions.gif" alt="filteres" className="object-contain w-[400px] py-5" />
        <p>ამ განყოფილებაში კი ირჩევთ სასურველ ბექგრაუნდს.</p>
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

        <div className="my-10">
          <Donation />
        </div>
      </div>
    </div>
  );
};

export default GeoDoc;
