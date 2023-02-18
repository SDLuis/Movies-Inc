import NowPlaying from '../components/nowPlayingMovies';

function Home() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
      <div className='w-[1000px] flex flex-col items-center py-10'>
        <NowPlaying />
      </div>
    </div>
  );
}

export default Home;
