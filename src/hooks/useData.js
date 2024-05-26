import { useContext } from 'react';
import { BibleContext } from '../context/InputValuesProvider';
import useBibleContext from '../hooks/useBibleContext';
import { useBibleSettingContext } from '../context/BibleSettingProvider';
const useData = () => {
  const { filteredData } = useContext(BibleContext);
  const { inputValues } = useBibleContext();

  //   For preview
  const languages = [
    {
      value: 'geo',
      label: 'geo',
      id: 'language',
    },
    {
      value: 'eng',
      label: 'eng',
      id: 'language',
    },
    {
      value: 'rus',
      label: 'rus',
      id: 'language',
    },
  ];
  const versions =
    filteredData?.versions?.map((item, i) => {
      return { value: item.value, label: item.label, id: 'version' };
    }) || [];

  const oldTest =
    filteredData?.bibleNames
      ?.map((item, i) => {
        return { value: i + 1, label: item, id: 'book' };
      })
      .slice(0, 39) || [];

  const newTest =
    filteredData?.bibleNames
      ?.map((item, i) => {
        return { value: i + 1, label: item, id: 'book' };
      })
      .slice(39, 66) || [];

  const book = [
    {
      label: 'Old Testament',
      options: oldTest,
    },
    {
      label: 'New Testament',
      options: newTest,
    },
  ];
  const chapter =
    filteredData?.tavi &&
    new Array(+filteredData?.tavi)?.fill()?.map((_, i) => {
      return { value: i + 1, label: i + 1, id: 'chapter' };
    });

  const verse =
    (filteredData?.muxli &&
      new Array(+filteredData?.muxli)?.fill()?.map((_, i) => {
        return { value: i + 1, label: i + 1, id: 'verse' };
      })) ||
    [];

  const versemde = filteredData?.muxli
    ? new Array(+filteredData?.muxli)
        ?.fill()
        ?.map((_, i) => {
          return { value: i + 1, label: i + 1, id: 'versemde' };
        })
        .slice(inputValues.verse)
    : [];

  //   For result

  const versionGeo = [
    {
      value: 1101,
      label: 'ახალი გადამუშავებული გამოცემა 2015',
      id: 'version',
    },
    {
      value: 3303,
      label: 'სბს–2013',
      id: 'version',
    },
    {
      value: 2202,
      label: 'სბს–სტოკჰოლმი 2001',
      id: 'version',
    },
  ];

  const versionEng = [
    {
      value: 7979,
      label: 'NASB New American Standard Bible',
      id: 'version',
    },
    {
      value: 7878,
      label: 'NIV New International Version',
      id: 'version',
    },
    {
      value: 8080,
      label: 'Basic English Bible',
      id: 'version',
    },
  ];

  const versionRus = [
    {
      value: 6001,
      label: 'Современный-перевод',
      id: 'version',
    },
    {
      value: 6002,
      label: 'Hовый Pусский Перевод (IBS)',
      id: 'version',
    },
  ];

  const allVersions = {
    geo: versionGeo,
    eng: versionEng,
    rus: versionRus,
  };

  const fontSizes = [
    {
      value: '2',
      label: '2',
      id: 'fontSize',
    },
    {
      value: '3',
      label: '3',
      id: 'fontSize',
    },
    {
      value: '4',
      label: '4',
      id: 'fontSize',
    },
    {
      value: '5',
      label: '5',
      id: 'fontSize',
    },
    {
      value: '6',
      label: '6',
      id: 'fontSize',
    },
    {
      value: '7',
      label: '7',
      id: 'fontSize',
    },
    {
      value: '8',
      label: '8',
      id: 'fontSize',
    },
    {
      value: '9',
      label: '9',
      id: 'fontSize',
    },
  ];

  const bibleNamesGeo = [
    'ბიბლია',
    'ძველი აღთქმა',
    'ახალი აღთქმა',
    'დაბადება',
    'გამოსვლა',
    'ლევიანნი',
    'რიცხვნი',
    'მეორე რჯული',
    'იესო ნავეს ძე',
    'მსაჯული',
    'რუთი',
    '1 მეფეთა',
    '2 მეფეთა',
    '3 მეფეთა',
    '4 მეფეთა',
    '1 ნეშტთა',
    '2 ნეშტთა',
    'ეზრა',
    'ნეემია',
    'ესთერი',
    'იობი',
    'ფსალმუნები',
    'იგავნი სოლომონისა',
    'ეკლესიასტე',
    'ქებათა-ქება სოლომონისა',
    'ესაია',
    'იერემია',
    'გოდება იერემიასი',
    'ეზეკიელი',
    'დანიელი',
    'ოსია',
    'იოველი',
    'ამოსი',
    'აბდია',
    'იონა',
    'მიქა',
    'ნაუმი',
    'აბაკუმი',
    'სოფონია',
    'ანგია',
    'ზაქარია',
    'მალაქია',
    'მათეს სახარება',
    'მარკოზის სახარება',
    'ლუკას სახარება',
    'იოანეს სახარება',
    'მოციქულთა საქმეები',
    'იაკობის წერილი',
    '1 პეტრეს წერილი',
    '2 პეტრეს წერილი',
    '1 იოანე',
    '2 იოანე',
    '3 იოანე',
    'იუდა',
    'რომაელთა მიმართ',
    '1 კორინთელთა მიმართ',
    '2 კორინთელთა მიმართ',
    'გალატელთა მიმართ',
    'ეფესელთა მიმართ',
    'ფილიპელთა მიმართ',
    'კოლასელთა მიმართ',
    '1 თესალონიკელთა მიმართ',
    '2 თესალონიკელთა მიმართ',
    '1 ტიმოთეს მიმართ',
    '2 ტიმოთეს მიმართ',
    'ტიტეს მიმართ',
    'ფილიმონის მიმართ',
    'ებრაელთა მიმართ',
    'გამოცხადება',
  ];

  const bibleNamesEng = [
    'Bible',
    'Old Testament',
    'New Testament',
    'Genesis',
    'Exodus',
    'Leviticus',
    'Numbers',
    'Deuteronomy',
    'Joshua',
    'Judges',
    'Ruth',
    '1 Samuel',
    '2 Samuel',
    '1 Kings',
    '2 Kings',
    '1 Chronicles',
    '2 Chronicles',
    'Ezra',
    'Nehemiah',
    'Esther',
    'Job',
    'Psalms',
    'Proverbs',
    'Ecclesiastes',
    'Song of Solomon',
    'Isaiah',
    'Jeremiah',
    'Lamentations',
    'Ezekiel',
    'Daniel',
    'Hosea',
    'Joel',
    'Amos',
    'Obadiah',
    'Jonah',
    'Micah',
    'Nahum',
    'Habbakuk',
    'Zephaniah',
    'Haggai',
    'Zechariah',
    'Malachi',
    'Matthew',
    'Mark',
    'Luke',
    'John',
    'Acts',
    'Romans',
    '1 Corinthians',
    '2 Corinthians',
    'Galatians',
    'Ephesians',
    'Philippians',
    'Colossians',
    '1 Thessalonians',
    '2 Thessalonians',
    '1 Timothy',
    '2 Timothy',
    'Titus',
    'Philemon',
    'Hebrews',
    'James',
    '1 Peter',
    '2 Peter',
    '1 John',
    '2 John',
    '3 John',
    'Jude',
    'Revelation',
  ];

  const bibleNamesRus = [
    'Bible',
    'Old Testament',
    'New Testament',
    'Бытие',
    'Исход',
    'Левит',
    'Числа',
    'Второзаконие',
    'Иисус Навин',
    'Книга Судей',
    'Руфь',
    '1 Царств',
    '2 Царств',
    '3 Царств',
    '4 Царств',
    '1 Паралипоменон',
    '2 Паралипоменон',
    'Книга Ездры',
    'Книга Неемии',
    'Книга Есфирь',
    'Книга Иова',
    'Псалтирь',
    'Притчи',
    'Екклесиаст',
    'Песня Песней',
    'Исаия',
    'Иеремия',
    'Плач Иеремии',
    'Иезекииль',
    'Даниил',
    'Осия',
    'Иоиль',
    'Амос',
    'Авдий',
    'Иона',
    'Михей',
    'Наум',
    'Аввакум',
    'Софония',
    'Аггей',
    'Захария',
    'Малахия',
    'От Матфея',
    'От Марка',
    'От Луки',
    'От Иоанна',
    'Деяния',
    'Иакова',
    '1 Петра',
    '2 Петра',
    '1 Иоанна',
    '2 Иоанна',
    '3 Иоанна',
    'Иуды',
    'К Римлянам',
    '1 Коринфянам',
    '2 Коринфянам',
    'К Галатам',
    'К Ефесянам',
    'К Филиппийцам',
    'К Колоссянам',
    '1 Фессалоникийцам',
    '2 Фессалоникийцам',
    '1 Тимофею',
    '2 Тимофею',
    'К Титу',
    'К Филимону',
    'К Евреям',
    'Откровение',
  ];

  const bibleNames = { geo: bibleNamesGeo, eng: bibleNamesEng, rus: bibleNamesRus };

  const { fontTitle, setFontTitle } = useBibleSettingContext();

  return {
    languages,
    versions,
    book,
    chapter,
    verse,
    versemde,
    allVersions,
    fontSizes,
    bibleNames,
    fontTitle,
    setFontTitle,
  };
};

export default useData;
