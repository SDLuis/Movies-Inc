import useFavoriteMovies from '../hooks/useFavoriteMovies';
import Favorites from '../components/favorites';

export default function favorites() {
  const { favoritesMovies } = useFavoriteMovies();

  if(!favoritesMovies.length) return <div className='h-[30vh] grid place-items-center text-3xl font-semibold'>No favotites movies yet</div> 

  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
      <div className='w-[1000px] flex flex-col items-center py-10'>
        <Favorites favoritesMovies={favoritesMovies} />
      </div>
    </div>
  );
}
