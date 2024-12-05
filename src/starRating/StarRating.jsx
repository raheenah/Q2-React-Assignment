// import { range } from './utils';
import { range } from "./util";

function StarRating({ rating }) {
  /*
    Here's the markup for a single star:
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */

  return (
    <div className='star-wrapper'>
      {Array.from({ length: rating }, (_, index) => (
        <img
          key={index} // Using the index as a key because stars are simple items
          alt='gold star'
          className='gold-star'
          src='https://sandpack-bundler.vercel.app/img/gold-star.svg'
        />
      ))}
    </div>
  );
}

export default StarRating;
