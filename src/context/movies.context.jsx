import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const MoviesContext = React.createContext();

export const MoviesProvider = ({ children }) => {
  const storedList = JSON.parse(localStorage.getItem('movieList')) ?? [];
  const [favoritesMovies, setFavoritesMovies] = useState(storedList);

  useEffect(() => {
    localStorage.setItem('movieList', JSON.stringify(favoritesMovies));
  }, [favoritesMovies]);

  const addItem = useCallback((item) => {
    setFavoritesMovies((prevList) => {
      const newList = [...prevList];
      newList.push(item);
      toast.success('Agregado a tus favoritas')
      return newList;
    });
  }, []);

  const removeItem = (id) => {
    setFavoritesMovies((prevList) => {
      const newList = prevList.filter((item) => item.id !== id);
      toast.success('Eliminada de tus favoritas')
      return newList;
    });
  };

  const clear = () => {
    setFavoritesMovies([]);
  };

  return (
    <MoviesContext.Provider
      value={{ favoritesMovies, setFavoritesMovies, addItem, removeItem, clear }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
