import { useState, useEffect, useRef } from 'react';
import {
  getSingleMovie,
  getCreditsMovie,
  rateMovie,
} from '../services/movies.service';
import { useParams } from 'react-router-dom';

export default function useSingleMovie() {
  const params = useParams();
  const ID = params.ID;
  const [singleMovie, setSingleMovie] = useState([]);
  const [credits, setCredits] = useState([]);
  const [errorHandler, setErrorHandler] = useState(null);
  const rateInput = useRef(null);

  useEffect(() => {
    getSingleMovie({ ID })
      .then(({ data }) => setSingleMovie(data))
      .catch((err) => setErrorHandler(err));
  }, []);

  useEffect(() => {
    getCreditsMovie({ ID })
      .then(({ data }) => setCredits(data))
      .catch((err) => setErrorHandler(err));
  }, []);

  const RateMovie = () => {
    const rate = parseFloat(rateInput.current?.value);
    rateInput.current.value
      ? rateMovie({ ID, rate }).then((res) => {
          return res;
        })
      : null;
  };
  return { singleMovie, credits, RateMovie, rateInput, errorHandler };
}
