import useSigleMovie from '../hooks/useSingleMovie';
import useFavoriteMovies from '../hooks/useFavoriteMovies';
import MovieDetails from '../components/movieDetails';

export default function Details() {
  const { singleMovie, credits, RateMovie } = useSigleMovie();
  const { handleFavorites, favorite } = useFavoriteMovies(singleMovie.id)
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[#121212] text-[#f2f2f2]'>
      <MovieDetails
        movie={singleMovie}
        credits={credits}
        RateMovie={RateMovie}
        handleFavorites={handleFavorites}
        favorite={favorite}
      />
    </div>
  );
}
