import { StarYellow } from './icons/star';
import { Favorite } from './icons/favorite';
import Rate from './rate';
import Casting from './casting';
import SimilarMovies from './similarMovies';

export default function MovieDetails({ movie, credits, RateMovie, handleFavorites, favorite }) {
  const genres = movie?.genres?.map((genres) => genres);
  const IMG_API_URL = 'https://image.tmdb.org/t/p/w440_and_h660_face/';
  const acting = credits?.cast?.filter(
    (person) => person.known_for_department === 'Acting'
  );

  return (
    <div className='w-[90%] min-h-screen bg-gray-800 rounded-md overflow-hidden'>
      <div className='flex flex-col lg:flex-row justify-center p-4 gap-5'>
        <div>
          <img
            className='w-[300px] object-cover rounded-md'
            src={`${IMG_API_URL}${movie?.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className='flex-1 flex flex-col gap-5 overflow-hidden'>
          <div className='w-full flex flex-col lg:flex-row lg:items-center gap-4 justify-between '>
            <p className='text-4xl font-semibold'>{movie.title}</p>
            <Rate RateMovie={RateMovie} />
          </div>
          <div className='w-full flex flex-col lg:flex-row lg:items-center justify-between'>
            <div className='w-full flex flex-col lg:flex-row gap-5 lg:gap-8 lg:items-center'>
              <p className='text-lg opacity-90'>{movie.release_date}</p>
              <div className='flex gap-5 lg:gap-8'>
                {genres?.map(({ id, name }) => (
                  <p key={id} className='opacity-90 list-item'>
                    {name}
                  </p>
                ))}
              </div>
              <p className='text-lg opacity-90 flex items-center gap-2'>
                {movie?.vote_average?.toFixed(1)}
                <StarYellow />
              </p>
            </div>
            <div>
              <button onClick={() => handleFavorites({ movie })}>
                <Favorite favorite={favorite} />
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-xl font-medium'>Description</p>
            <p className='text-lg'>{movie.overview}</p>
          </div>
          <p className='text-4xl font-semibold'>Casting</p>
          <div className='w-full overflow-x-scroll flex'>
            {acting?.map((actor) => (
              <Casting key={actor.id} actor={actor} />
            ))}
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-center'>
        <p className='text-4xl font-semibold py-4'>Similar Movies</p>
        <SimilarMovies />
      </div>
    </div>
  );
}
