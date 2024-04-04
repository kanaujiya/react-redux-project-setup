import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const usefetchDataFromApi = async (url, params, method) => {
  try {
    const { data } = await axios({
      url: `${baseUrl}/${url}`,
      method: method,
      headers: headers,
      params: params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
