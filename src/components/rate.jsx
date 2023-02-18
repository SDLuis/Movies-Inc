import { Star } from "./icons/star";

export default function Rate({ RateMovie }) {
  return (
    <div className='flex gap-5 items-center'>
      <span className='flex flex-row-reverse'>
        <Star rate={10} RateMovie={RateMovie} />
        <Star rate={9} RateMovie={RateMovie} />
        <Star rate={8} RateMovie={RateMovie} />
        <Star rate={7} RateMovie={RateMovie} />
        <Star rate={6} RateMovie={RateMovie} />
        <Star rate={5} RateMovie={RateMovie} />
        <Star rate={4} RateMovie={RateMovie} />
        <Star rate={3} RateMovie={RateMovie} />
        <Star rate={2} RateMovie={RateMovie} />
        <Star rate={1} RateMovie={RateMovie} />
      </span>
    </div>
  );
}
