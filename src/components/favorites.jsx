import Movie from "./movie";

export default function Favorites({ favoritesMovies }) {
  return (
    <div className='flex flex-col justify-center'>
      <p className='text-3xl font-sans font-semibold'>Favorites Movies</p>
      <div className='grid grid-cols-4 gap-3 place-items-center'>
        {favoritesMovies?.map((singleMovie) => (
          <Movie movie={singleMovie} key={singleMovie.id} />
        ))}
      </div>
    </div>
  );
}
