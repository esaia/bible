import axios from 'axios';

// export const fetchData = async params => {
//   const { data } = await axios.get(process.env.REACT_APP_BASE_URL, {
//     params,
//   });
//   return data;
// };

// https://holybible.ge/service.php
// http://localhost:8000/api/data

export const fetchData = async params => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API}/data`,
    {
      params,
    },
    {
      Headers: { 'Access-Control-Allow-Origin': '*' },
    },
  );
  return data;
};
