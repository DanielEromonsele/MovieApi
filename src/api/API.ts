import axios, { AxiosResponse } from "axios";

const URL: string =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=1d88de48e71620e259bfbed33480fef5&language=en-US";

const genreDataURL: string =
  "https://api.themoviedb.org/3/discover/movie?api_key=1d88de48e71620e259bfbed33480fef5&with_genres=";

const genreURL: string =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=1d88de48e71620e259bfbed33480fef5&language=en-US";

const getOneByIdURL =
  "https://api.themoviedb.org/3/movie/103?api_key=1d88de48e71620e259bfbed33480fef5&language=en-US";

export const getDataByGenre = async (ID: string) => {
  return await axios
    .get(`${genreDataURL}${ID}`)
    .then((res: AxiosResponse<any, any>) => {
      return res.data?.results;
    });
};

export const getGenre = async () => {
  return await axios.get(`${genreURL}`).then((res: AxiosResponse<any, any>) => {
    return res.data?.genres;
  });
};

export const getData = async () => {
  return await axios.get(URL).then((res: AxiosResponse<any, any>) => {
    return res.data?.results;
  });
};

export const getDataByID = async () => {
  return await axios.get(URL).then((res: AxiosResponse<any, any>) => {
    return res.data?.results;
  });
};

export const getOneByID = async (ID: string) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/movie/${ID}?api_key=1d88de48e71620e259bfbed33480fef5&language=en-US"`
    )
    .then((res: AxiosResponse<any, any>) => {
      return res.data;
    });
};
