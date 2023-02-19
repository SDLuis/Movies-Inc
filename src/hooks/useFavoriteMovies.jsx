import { useContext, useEffect, useState } from 'react';
import MoviesContext from '../context/movies.context';

export default function useFavoriteMovies(ID) {
  let Saved;
  const { favoritesMovies, addItem, removeItem, clear } = useContext(MoviesContext);
  const [favorite, setFavorite] = useState(false);

  const FilterSaved = favoritesMovies?.filter((saveMovie) => saveMovie.id === ID);
  FilterSaved?.length > 0 ? (Saved = true) : (Saved = false);

  useEffect(() => {
    setFavorite(Saved);
  }, [ID, Saved]);

  const handleFavorites = ({ movie }) => {
    const saved = favoritesMovies?.filter(
      (saveMovie) => saveMovie.id === movie.id
    );
    saved?.length > 0 ? removeItem(movie.id) : addItem(movie);
  };

  return {
    favoritesMovies,
    addItem,
    removeItem,
    clear,
    handleFavorites,
    favorite,
  };
}
