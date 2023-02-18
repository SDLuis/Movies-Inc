import { useState } from 'react';
import NowPlaying from '../components/nowPlayingMovies';

function Home() {
  const [category, setCategory] = useState('Now Playing');
  return (
    <div className='min-h-screen w-full flex flex-col items-center bg-[#121212] text-[#f2f2f2]'>
      <div className='w-[1000px] flex flex-col items-center py-10'>
        <p className='text-4xl font-sans font-medium'>Movies Inc</p>
        { category === 'Now Playing' ?  <NowPlaying /> : null}
      </div>
    </div>
  );
}

export default Home;