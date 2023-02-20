import useSigleMovie from '../hooks/useSingleMovie';
import useFavoriteMovies from '../hooks/useFavoriteMovies';
import MovieDetails from '../components/movieDetails';
import Loading from '../components/loading';

export default function Details() {
  const { singleMovie, cast, RateMovie, loading } = useSigleMovie();
  const { handleFavorites, favorite } = useFavoriteMovies(singleMovie?.id)

  if (loading) return <div className='h-[60vh] grid place-items-center'><Loading /></div>
  if (!loading && !singleMovie) return <div className='h-[60vh] grid place-items-center text-3xl font-semibold'>Movie not found</div>
  
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[#121212] text-[#f2f2f2]'>
      <MovieDetails
        movie={singleMovie}
        cast={cast}
        RateMovie={RateMovie}
        handleFavorites={handleFavorites}
        favorite={favorite}
      />
    </div>
  );
}
