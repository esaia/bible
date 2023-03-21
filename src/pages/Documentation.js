import React from "react";
import { Switch } from "@material-tailwind/react";
import useBibleContext from "../hooks/useBibleContext";
import { FaFacebookMessenger, FaTelegram } from "react-icons/fa";

const Documentation = () => {
  const { isDarkMode, setisDarkMode } = useBibleContext();
  return (
    <div className="w-full flex justify-center min-h-[100vh] dark:text-white ">
      <div className="w-full max-w-[600px]  p-4 py-16 ">
        <h1 className=" text-center text-2xl mb-4">დოკუმენტაცია</h1>
        <p className="">
          ეს აპლიკაცია გამოიყენება ეკლესიაში ბიბლიის მუხლების გასაშვებად
          პროექტორზე. მისი გამოყენება ძალიან მარტივია.
        </p>
        <img
          src="/images/filteres.jpeg"
          alt="filteres"
          className="object-contain w-full py-5"
        />
        <p className="">
          1. პირველი ირჩევ ენას, რომელ ენაზეც გვინდა რომ დაინახო "preview".{" "}
          <span className="text-red-400">
            ეს არ ცვლის პროექტორზე გასულ ენას!{" "}
          </span>
          <br />
          <br />
          2. იმის მიხედვით თუ რომელი ენა ავირჩიეთ გამოჩნდება ვერსიები. აირჩევ
          სასურველ ვერსიას.
          <img
            src="/images/versia.jpeg"
            alt="filteres"
            className="object-contain w-[250px] py-5"
          />
          <br />
          3. შემდეგი ნაბიჯია წიგნის, თავის და მუხლის არჩევა. თუ რამოდენიმე
          მუხლის ჩვენება გინდა ერთდროულად "მუხლი (მდე)"-ში ირჩევ თუ სადამდე
          გინდა მუხლები აჩვენოს. შედეგი ავტომატურად გამოჩნდება.
        </p>
        <br />
        <hr />
        <br />
        <h2 className="font-bold mb-1">როგორ ვაჩვენო პროექტორზე?</h2>
        <p>
          დაბლითა მარჯვენა კუთხეში დაინახავ ღილაკს "Open Present View" დააჭირე
          და გადაგიყვანს ახალ ტაბზე. ეს გვერდი უნდა აჩვენო პროექტორზე. იმისათვის
          რომ ბრაუზერის ზედა მხარე არ გამოჩნდეს თუ ვინდოუსზე ხარ დააჭირე F11-ს
          ან დაბლითა მარჯვენა კუთხეში აქვს გადიდების იკონი.
          <br />
          <br />
          იმისთვის რომ სასურველი ტექსტი სასურველ ენაზე გამოჩნეს დაბრუნდი ისევ
          მთავარ გვერდზე, უნდა აირჩიო ენა და შესაბამისი ვერსიები და show ღილაკს
          დააწექი. ასევე შეგიძლია აკონტროლო ფონტის ზომა.
        </p>
        <img
          src="/images/lang.jpeg"
          alt="filteres"
          className="object-contain w-[400px] py-5"
        />

        <p>ამ განყოფილებაშ კი ირჩევთ სასურველ ბექგრაუნდს</p>
        <img
          src="/images/backg.jpeg"
          alt="filteres"
          className="object-contain w-[400px] py-5"
        />
        <div
          className="p-4 mb-4  text-black  rounded-lg bg-green-50 dark:bg-gray-800 dark:text-white mt-3"
          role="alert"
        >
          ყველა ცვლილება შენახული იქნება ბრაუზერის localStorage-ში. თუ რაიმემ
          გაჭედა და არ მუშაობს ცადეთ შემდეგი მეთოდები:
        </div>
        <ul>
          <li className="dark:text-white ">
            1. გაასუფთავეთ localstorage. გაეცანით სტატიას{" "}
            <a href="https://doc.arcgis.com/en/power-bi/get-started/clear-browser-storage.htm">
              link
            </a>
          </li>
          <li className="dark:text-white ">
            2. დაარეფრეშეთ გვერდი სადაც უშვებთ მუხლებს
          </li>
          <li className="dark:text-white  ">
            <p>
              3. დამატებით შენიშვნებისთვის / იდეებისთვის მომწერეთ მესენჯერზე /
              ტელეგრამზე{" "}
            </p>{" "}
            <div className="flex items-center pt-2">
              <a
                href="https://www.facebook.com/esaia.gafrindashvili/"
                className="w-full flex items-center justify-center gap-2 mt-2 "
                target="_blank"
              >
                <button>Messenger</button>
                <FaFacebookMessenger />
              </a>
              <a
                href="https://t.me/esoeso27"
                className="w-full flex items-center justify-center gap-2 mt-2 "
                target="_blank"
              >
                <button>Telegram</button>
                <FaTelegram />
              </a>
            </div>
          </li>
        </ul>

        <p className="mt-20">
          პაწა ვიწვაალე რაცხა გამომვიიდა და ერთიორგან მაინც ახსეენეთ ჩეემი
          სახეელი 🙃
        </p>
      </div>
      {/* Fixed */}

      <div className=" p-3  right-0 bottom-0 text-white m-4 fixed  ">
        <div className="flex">
          <Switch
            color="indigo"
            label={isDarkMode ? "light" : "dark"}
            onChange={() => setisDarkMode(!isDarkMode)}
            checked={isDarkMode}
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
