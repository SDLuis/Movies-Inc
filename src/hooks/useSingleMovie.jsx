import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import {
  getSingleMovie,
  getCreditsMovie,
  rateMovie,
  getSimilarMovies
} from '../services/movies.service';
import { useParams } from 'react-router-dom';

export default function useSingleMovie() {
  const params = useParams();
  const ID = params.ID;

  const [singleMovie, setSingleMovie] = useState([]);
  const [credits, setCredits] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  const [errorHandler, setErrorHandler] = useState(null);

  useEffect(() => {
    getSingleMovie({ ID })
      .then(({ data }) => setSingleMovie(data))
      .catch((err) => setErrorHandler(err));
  }, [ID]);

  useEffect(() => {
    getCreditsMovie({ ID })
      .then(({ data }) => setCredits(data))
      .catch((err) => setErrorHandler(err));
  }, [ID]);

  useEffect(() => {
    getSimilarMovies({ ID })
      .then(({ data }) => setSimilarMovies(data))
      .catch((err) => setErrorHandler(err));
  }, [ID]);

  const RateMovie = ({ rate = null }) => {
    rate
      ? rateMovie({ ID, rate })
          .then((res) => {
            toast.success(res?.data?.status_message);
          })
          .catch((err) => toast.error(err))
      : null;
  };
  return { singleMovie, credits, RateMovie, errorHandler, similarMovies };
}
