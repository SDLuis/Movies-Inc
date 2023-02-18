import { useState, useEffect} from 'react'
import { getNowPlayingMovies } from '../services/movies.service'

export default function useMovies() {

  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [ errorHandler, setErrorHandler] = useState(null)

  useEffect(() => {
    getNowPlayingMovies().then(({ data }) => setNowPlayingMovies(data)).catch((err) => setErrorHandler(err))
  },[])

  return { nowPlayingMovies }
}
