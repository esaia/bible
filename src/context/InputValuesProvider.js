import React, { createContext, useEffect, useReducer, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { fetchData } from '../lib/axios';
import { useSearchParams } from 'react-router-dom';

export const BibleContext = createContext();

const InputValuesProvider = ({ children }) => {
  const initialState = {};

  const [searchParams, setSearchParams] = useSearchParams();
  const inputValueInitial = {
    language: searchParams.get('language') || 'eng',
    version: +searchParams.get('version') || 7979,
    book: +searchParams.get('book') || 1,
    chapter: +searchParams.get('chapter') || 1,
    verse: +searchParams.get('verse') || 1,
    versemde: +searchParams.get('versemde'),
    phrase: '',
    separate: false,
  };
  const bibleDataReducer = (state, { type, payload }) => {
    const e = payload?.event;
    const triggleAction = payload?.triggleAction;

    const appendQueryInUrl = e => {
      searchParams.delete(e.id);
      searchParams.append(e.id, e.value);
      searchParams.sort();
    };

    switch (type) {
      case 'CHANGE_INPUT_VALUE':
        if (triggleAction.action === 'clear' && triggleAction?.removedValues) {
          if (!triggleAction?.removedValues?.length) return state;

          const { id } = triggleAction.removedValues[0];
          let newState = {
            ...state,
          };

          switch (id) {
            case 'chapter':
              searchParams.delete(id);
              searchParams.delete('verse');
              searchParams.delete('versemde');

              newState = {
                ...newState,
                [id]: null,
                verse: null,
                versemde: null,
              };
              break;
            case 'verse':
              searchParams.delete(id);
              searchParams.delete('versemde');

              newState = {
                ...newState,
                [id]: null,
                versemde: null,
              };
              break;

            default:
              searchParams.delete(id);

              newState = {
                ...newState,
                [id]: null,
              };
          }

          return newState;
        } else {
          let newState = {
            ...state,
          };

          switch (e?.id) {
            case 'book':
              searchParams.delete('chapter');
              searchParams.delete('verse');
              searchParams.delete('versemde');

              appendQueryInUrl(e);
              newState = {
                ...newState,
                [e?.id]: e?.value,
                chapter: 1,
                phrase: '',
                verse: 1,
                versemde: null,
                separate: false,
              };
              break;

            case 'chapter':
              searchParams.delete('verse');
              searchParams.delete('versemde');
              appendQueryInUrl(e);

              newState = {
                ...newState,
                [e?.id]: e?.value,
                phrase: '',
                verse: 1,
                versemde: null,
                separate: false,
              };
              break;

            case 'verse':
              searchParams.delete('versemde');

              appendQueryInUrl(e);

              newState = {
                ...newState,
                [e?.id]: e?.value,
                versemde: null,
                separate: false,
              };
              break;
            case 'language':
              if (e?.value === 'eng') {
                appendQueryInUrl({ id: 'version', value: 7979 });
                appendQueryInUrl(e);

                newState = {
                  ...newState,
                  version: 7979,
                  [e?.id]: e?.value,
                };
              } else if (e?.value === 'rus') {
                appendQueryInUrl({ id: 'version', value: 6001 });
                appendQueryInUrl(e);

                newState = {
                  ...newState,
                  version: 6001,
                  [e?.id]: e?.value,
                };
              } else {
                appendQueryInUrl({ id: 'version', value: 1101 });
                appendQueryInUrl(e);

                newState = {
                  ...newState,
                  version: 1101,
                  [e?.id]: e?.value,
                };
              }
              break;

            default:
              appendQueryInUrl(e);

              newState = {
                ...newState,
                [e?.id]: e?.value,
              };
          }

          return newState;
        }

      case 'DECREASE_VERSE':
        if (state.verse === 1 || state.verse <= payload) {
          return {
            ...state,
            versemde: null,
          };
        }
        return {
          ...state,
          verse: +state.verse - payload,
          versemde: +state.versemde - payload,
        };
      case 'INCREASE_VERSE':
        if (payload === 1 && !state.versemde) {
          return {
            ...state,
            verse: +state.verse + 1,
            versemde: null,
          };
        } else {
          return {
            ...state,
            verse: +state.verse + payload,
            versemde: +state.versemde + payload,
          };
        }
      case 'VERSEMDE_NULL':
        return { ...state, versemde: null };

      case 'MAKE_BLANK':
        return {
          ...state,

          book: 1,
          chapter: null,
          verse: null,
          versemde: null,
          separate: true,
        };
      case 'PHRASE_INPUT':
        return {
          ...state,
          phrase: payload.event.target.value,
        };
      case 'SEPARATE_PREVIEW':
        const { book, chapter, verse } = payload;

        searchParams.delete('book');
        searchParams.delete('chapter');
        searchParams.delete('verse');
        searchParams.delete('versemde');

        searchParams.append('book', +book);
        searchParams.append('chapter', chapter);
        searchParams.append('verse', verse);

        return {
          ...state,
          book: +book,
          chapter: +chapter,
          verse: verse,
          phrase: '',
          separate: false,
        };

      default:
        break;
    }
  };

  const [inputValues, inputDispatch] = useReducer(bibleDataReducer, inputValueInitial);
  const [filteredData, setfilteredData] = useState(initialState);
  const queryClient = new useQueryClient();

  const params = {
    w: inputValues?.book,
    t: inputValues?.chapter,
    m: '',
    s: inputValues?.phrase,
    mv: inputValues?.version || '2202',
    language: inputValues?.language,
    page: 1,
  };

  const { verse, versemde, separate, ...newInputValues } = inputValues;

  const {
    data: previousFilteredData,
    refetch,
    isFetched,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['getBibleData', newInputValues],
    queryFn: () => fetchData(params),
    enabled: false,
  });

  useEffect(() => {
    if (isFetched) setfilteredData(previousFilteredData);
  }, [previousFilteredData, isFetched]);

  useEffect(() => {
    if (!queryClient.getQueryData(['getBibleData', newInputValues]) && !inputValues.separate) refetch();
  }, [inputValues.version, inputValues.book, inputValues.chapter, inputValues.language]);

  useEffect(() => {
    setSearchParams(searchParams);
  }, [inputValues]);

  return (
    <BibleContext.Provider
      value={{
        filteredData,
        inputDispatch,
        inputValues,
        isFetching,
        refetch,
        setfilteredData,
      }}
    >
      <div>
        <div>
          {error ? (
            <div className="w-full h-screen flex flex-col justify-center items-center">
              <div className="flex  justify-center items-center">
                <h3 className="bold text-3xl">Fetch Error</h3>
                <a href="/" className="p-4 m-3 bg-gray-300 rounded-sm text-black">
                  refresh
                </a>
              </div>

              <p> We have a technical problem, please try again later </p>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </BibleContext.Provider>
  );
};

export default InputValuesProvider;
