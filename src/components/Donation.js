import React from 'react';

const Donation = ({ lang }) => {
  return (
    <div className="py-4">
      {lang === 'en' ? (
        <div>
          <h3 className="text-[30px] text-center font-bold ">Donation 🎁</h3>
          <br />
          <p>
            The use of this application is 100% free, but similar services require financial support. Therefore,
            donation details are provided on the website. Thank you in advance for your generosity.
          </p>

          <div className="border border-gray-400 dark:border-gray-800 rounded-sm overflow-hidden p-5 flex flex-col space-y-6  my-4 ">
            <PaymentMethod
              text="GE42BG0000000534460839"
              bankName="Bank Of Georgia"
              recipient="recipient : Esaia Gaprindashvili"
              img="/images/bog.png"
            />
            <PaymentMethod
              text="GE74TB7572745061100113"
              bankName="TBC Bank"
              recipient="recipient : Esaia Gaprindashvili"
              img="/images/tbc.png"
            />

            <PaymentMethod
              text="Esaia Gaprindashvili"
              bankName="Paypal"
              recipient=""
              img="/images/paypal.png"
              btnText="open"
              onButtonClick={() => window.open('https://www.paypal.com/ncp/payment/X37DMGGGMPSBL', '_blank')}
            />

            <PaymentMethod
              text="TYyBNQWGAKh9pN1YLJDeosQKM1u5GVwPz4"
              bankName="tether (USDT)"
              recipient="Network: TRX Tron (TRC20)"
              img="/images/tether.png"
              cryptoQr="/images/usdt_trc_20.jpg"
            />
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-[30px] text-center font-bold ">დონაცია</h3>
          <br />
          <p>
            ამ აპლიკაციის მოხმარება 100%-ით უფასოა, თუმცა მსგავსი სერვისები საჭიროებს ფინანსურ მხარდაჭერას. სწორედ
            ამიტომ საიტზე მითითებულია დონაციის რეკვიზიტები. წინასწარ მადლობას გიხდით გულუხვობისთვის.
          </p>
          <div className="border border-gray-400 dark:border-gray-800 rounded-sm overflow-hidden p-5 flex flex-col space-y-6  my-4 ">
            <PaymentMethod
              text="GE42BG0000000534460839"
              bankName="საქართველოს ბანკი"
              recipient="მიმღები : ესაია გაფრინდაშვილი"
              img="/images/bog.png"
            />
            <PaymentMethod
              text="GE74TB7572745061100113"
              bankName="თბს ბანკი"
              recipient="მიმღები : ესაია გაფრინდაშვილი"
              img="/images/tbc.png"
            />

            <PaymentMethod
              text="Esaia Gaprindashvili"
              bankName="Paypal"
              recipient=""
              img="/images/paypal.png"
              btnText="open"
              onButtonClick={() => window.open('https://www.paypal.com/ncp/payment/X37DMGGGMPSBL', '_blank')}
            />

            <PaymentMethod
              text="TYyBNQWGAKh9pN1YLJDeosQKM1u5GVwPz4"
              bankName="ტეზერი (USDT)"
              recipient="ქსელი: TRX Tron (TRC20)"
              img="/images/tether.png"
              cryptoQr="/images/usdt_trc_20.jpg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;

const PaymentMethod = ({ text, bankName, recipient, img, btnText, onButtonClick, cryptoQr }) => {
  const copyText = () => {
    alert(navigator.clipboard);

    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch(error => {
        console.error('Failed to copy text');
      });
  };

  return (
    <div>
      <p className="text-[20px] font-bold">{bankName}</p>
      <p className=" text-gray-700 dark:text-gray-300">{recipient}</p>

      <div className="border border-gray-800 rounded-md w-full  flex items-center justify-between h-10 mt-3 overflow-hidden">
        <div className=" max-w-[45px] h-full flex-shrink-0  ">
          <img src={img} alt={bankName} className="w-full  object-cover h-full" />
        </div>

        <p className="mx-3 truncate w-20  md:w-full flex-1 ">{text}</p>

        <button
          className="bg-[#155441] py-2 px-1 md:py-4 md:px-7 h-full flex items-center justify-center w-[60px] md:w-[100px] flex-shrink-0 text-white "
          onClick={onButtonClick ? onButtonClick : copyText}
        >
          {btnText ? btnText : 'Copy'}
        </button>
      </div>

      {cryptoQr && <img src={cryptoQr} alt="crypto address qr code" className="w-20 mt-4" />}
    </div>
  );
};
