import useSigleMovie from '../hooks/useSingleMovie';
import MovieDetails from '../components/movieDetails';

export default function Details() {
  const { singleMovie, credits, RateMovie, rateInput } = useSigleMovie();
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[#121212] text-[#f2f2f2]'>
      <MovieDetails movie={singleMovie} credits={credits} RateMovie={RateMovie} rateInput={rateInput} />
    </div>
  );
}
