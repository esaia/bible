import React, { useContext } from "react";
import { BibleContext } from "../context/BibleProvide";

const useData = () => {
  const { filteredData, originalData, inputValues } = useContext(BibleContext);

  const languages = [
    {
      value: "geo",
      label: "geo",
      id: "ena",
    },
    {
      value: "eng",
      label: "eng",
      id: "ena",
    },
    {
      value: "russian",
      label: "rus",
      id: "ena",
    },
  ];
  const versions = filteredData?.versions?.map((item, i) => {
    return { value: item, label: item, id: "version" };
  });

  const bible = originalData?.bibleNames
    ?.map((item, i) => {
      return { value: i + 1, label: item, id: "book" };
    })
    .slice(0, 3);

  const oldTest = originalData?.bibleNames
    ?.map((item, i) => {
      return { value: i + 1, label: item, id: "book" };
    })
    .slice(3, 42);

  const newTest = originalData?.bibleNames
    ?.map((item, i) => {
      return { value: i + 1, label: item, id: "book" };
    })
    .slice(42, 69);

  const book = [
    {
      label: "ბიბლია",
      options: bible,
    },
    {
      label: "ძველი აღთქმა",
      options: oldTest,
    },
    {
      label: "ახალი აღთქმა",
      options: newTest,
    },
  ];
  const chapter =
    filteredData?.tavi &&
    new Array(+filteredData?.tavi[0].cc)?.fill()?.map((_, i) => {
      return { value: i + 1, label: i + 1, id: "chapter" };
    });

  const verse =
    filteredData?.muxli &&
    new Array(+filteredData?.muxli[0].cc)?.fill()?.map((_, i) => {
      return { value: i + 1, label: i + 1, id: "verse" };
    });

  const versemde =
    filteredData?.muxli &&
    new Array(+filteredData?.muxli[0].cc)
      ?.fill()
      ?.map((_, i) => {
        return { value: i + 1, label: i + 1, id: "versemde" };
      })
      .slice(inputValues?.verse);

  return { languages, versions, book, chapter, verse, versemde };
};

export default useData;
