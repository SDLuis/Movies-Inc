import useMovies from '../hooks/useMovies';
import NowPlaying from '../components/nowPlayingMovies';
import Loading from '../components/loading';

function Home() {
  const { nowPlayingMovies: { results }, loading } = useMovies();
  const resultsSorted = results?.sort((x, y) => x.title.localeCompare(y.title));

  if (loading) return <div className='h-[60vh] grid place-items-center'><Loading /></div> 
  if (!loading && !results?.length) return <div className='h-[30vh] grid place-items-center text-3xl font-semibold'>No movies available</div>
 
  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
      <div className='w-[1000px] flex flex-col items-center py-10'>
        <NowPlaying resultsSorted={resultsSorted} />
      </div>
    </div>
  );
}

export default Home;
