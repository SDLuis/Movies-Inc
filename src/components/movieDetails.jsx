import React from 'react';
import placeholder from '../assets/placeholder.jpg';

export default function MovieDetails({ movie, credits, RateMovie, rateInput }) {
  const genres = movie?.genres?.map(({ name }) => name);
  const IMG_API_URL = 'https://image.tmdb.org/t/p/w440_and_h660_face/';
  const acting = credits?.cast?.filter(
    (person) => person.known_for_department === 'Acting'
  );

  return (
    <div className='w-[90%] min-h-screen flex flex-col lg:flex-row justify-center p-4 bg-gray-800 gap-5 rounded-md'>
      <div>
        <img
          className='w-[300px] object-cover rounded-md'
          src={`${IMG_API_URL}${movie?.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className='flex-1 flex flex-col gap-5 overflow-hidden'>
        <div className='flex gap-5 items-center'>
          <p className='text-4xl font-semibold'>{movie.title}</p>
          <input
            className='w-20 h-full outline-none text-black px-1'
            type='number'
            name='rate'
            min='1'
            max='10'
            defaultValue='5'
            step='.1'
            ref={rateInput}
          />
          <button className='bg-blue-600 text-white rounded-md px-4 py-2 text-lg' onClick={() => RateMovie()}>
            Rate
          </button>
        </div>
        <div className='flex gap-5 lg:gap-8 items-center'>
          <p className='text-lg opacity-90'>{movie.release_date}</p>
          <div className='flex gap-5 lg:gap-8'>
            {genres?.map((genre) => (
              <p key={genre.id} className='opacity-90 list-item'>
                {genre}
              </p>
            ))}
          </div>
          <p className='text-lg opacity-90'>{movie?.vote_average} Stars</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-xl font-medium'>Description</p>
          <p className='text-lg'>{movie.overview}</p>
        </div>
        <div className='w-full overflow-x-scroll flex'>
          {acting?.map((actor) => (
            <div key={actor.id} className='min-w-[150px] p-2 flex flex-col'>
              <img
                className='min-w-[100px] object-cover rounded-md'
                src={
                  actor?.profile_path
                    ? `${IMG_API_URL}${actor?.profile_path}`
                    : placeholder
                }
                alt={actor.original_name}
              />
              <div>
                <p>{actor.original_name}</p>
                <p>{`(${actor.character})`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
