import React from 'react'
import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  const IMG_API_URL = 'https://image.tmdb.org/t/p/w440_and_h660_face/';

  return (
    <Link to={`/movie/${movie.id}/details`}>

    <div className='w-48 h-96 flex flex-col items-start p-2 rounded-md gap-2'>
      <div className='w-full flex justify-center'> 
      <img
        className='w-full object-cover rounded-md'
        src={`${IMG_API_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      </div>
      <div className='w-full'>
        <p className='text-xl font-medium'>{movie.title}</p>
        <div className='flex justify-between items-center'>
        <p className='opacity-60 text-xl'>{movie.release_date}</p>
        <p className='text-xl opacity-80'>{movie.vote_average}</p>
        </div>
        </div>
    </div>
    </Link>
  );
}
