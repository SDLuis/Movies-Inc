import Movie from "./movie";

export default function Favorites({ favoritesMovies }) {
  if(!favoritesMovies.length) return <div className='h-[30vh] grid place-items-center text-3xl font-semibold'>No favotites movies yet</div> 
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
