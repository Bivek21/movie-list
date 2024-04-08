import axios from "axios";
const apiUrl = "https://www.omdbapi.com/?apikey=1c49254a&t=";

export const fetchFromAPI = async (str) => {
  const response = await axios.get(apiUrl + str);
  console.log(response);
  return response.data;
};
