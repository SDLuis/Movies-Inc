import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY= 'e868244aacfa0841e1565ca40086ceba'

export const getNowPlayingMovies = async () => {
  return axios
    .get(
      `${API_URL}/movie/now_playing?api_key=${API_KEY}`)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
}

export const getSingleMovie = async ({ ID }) => {
  return axios
    .get(
      `${API_URL}/movie/${ID}?api_key=${API_KEY}`)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
}

export const getCreditsMovie = async ({ ID }) => {
  return axios
    .get(
      `${API_URL}/movie/${ID}/credits?api_key=${API_KEY}`)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
}

export const rateMovie = async ({ ID, rate }) => {
  return axios
    .post(
      `${API_URL}/movie/${ID}/rating?api_key=${API_KEY}`, {value: 8.5})
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
}