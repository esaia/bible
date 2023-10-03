import axios from "axios";

export const fetchData = async (params) => {
  const { data } = await axios.get(process.env.REACT_APP_BASE_URL, {
    params,
  });
  return data;
};
