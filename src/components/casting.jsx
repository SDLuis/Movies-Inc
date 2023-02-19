import placeholder from '../assets/placeholder.jpg';

export default function Casting({ actor }) {
  const IMG_API_URL = 'https://image.tmdb.org/t/p/w440_and_h660_face/';

  return (
    <div className='movieCast min-w-[150px] p-2 flex flex-col'>
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
  );
}
