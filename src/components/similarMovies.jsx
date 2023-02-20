import useSingleMovie from '../hooks/useSingleMovie';
import Movie from '../components/movie';

export default function SimilarMovies() {
  const { similarMovies: { results }, } = useSingleMovie();

  return (
    <div className='w-full overflow-x-scroll flex'>
      {results?.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
