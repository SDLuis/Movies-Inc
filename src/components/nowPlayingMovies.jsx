import useMovies from '../hooks/useMovies';
import Movie from '../components/movie';

function NowPlaying({ results }) {
  const resultsSorted = results?.sort((x, y) => x.title.localeCompare(y.title));

  return (
    <div className='flex flex-col justify-center'>
      <p className='text-3xl font-sans font-medium'>Now Playing</p>
      <div className='grid grid-cols-4 gap-3'>
        {resultsSorted?.map((singleMovie) => (
          <div className='nowPlayingMovie'>
            <Movie movie={singleMovie} key={singleMovie.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NowPlaying;
