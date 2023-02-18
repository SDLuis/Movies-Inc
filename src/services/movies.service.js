import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e868244aacfa0841e1565ca40086ceba';
const SESSION_ID = '5560ea88c430f0537d0b985f05e81e4fc73e10d0';

export const getNowPlayingMovies = async () => {
  return axios
    .get(`${API_URL}/movie/now_playing?api_key=${API_KEY}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getSingleMovie = async ({ ID }) => {
  return axios
    .get(`${API_URL}/movie/${ID}?api_key=${API_KEY}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getCreditsMovie = async ({ ID }) => {
  return axios
    .get(`${API_URL}/movie/${ID}/credits?api_key=${API_KEY}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const rateMovie = async ({ ID, rate }) => {
  return axios
    .post(
      `${API_URL}/movie/${ID}/rating?api_key=${API_KEY}&session_id=${SESSION_ID}`,
      { value: rate }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getSimilarMovies = async ({ ID }) => {
  return axios
    .get(`${API_URL}/movie/${ID}/similar?api_key=${API_KEY}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};