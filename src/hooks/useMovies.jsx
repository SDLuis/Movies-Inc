import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { getNowPlayingMovies } from '../services/movies.service';

export default function useMovies() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [loading, serLoading] = useState(true);

  useEffect(() => {
    getNowPlayingMovies()
      .then(({ data }) => setNowPlayingMovies(data))
      .catch((err) => toast.error(err))
      .finally(() => serLoading(false))
  }, []);

  return { nowPlayingMovies, loading };
}
