import useFavoriteMovies from '../hooks/useFavoriteMovies';
import Favorites from '../components/favorites';

export default function favorites() {
  const { favoritesMovies } = useFavoriteMovies();
  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
      <div className='w-[1000px] flex flex-col items-center py-10'>
        <Favorites favoritesMovies={favoritesMovies} />
      </div>
    </div>
  );
}
