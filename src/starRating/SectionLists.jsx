import React, { useState } from "react";
import StarRating from "./StarRating";
import '../App.css';
import '../index.css';

function SectionLists({ name, initialRating }) {
  const TOTAL = 5;
  const [rating, setRating] = useState(initialRating);

  const handleRatingChange = (event) => {
    let newRating = parseInt(event.target.value, 10) || 0; // Default to 0 if invalid input
    if (newRating > TOTAL) newRating = TOTAL;
    if (newRating < 0) newRating = 0;
    setRating(newRating);
  };

  return (
    <section>
      <h2>{name}</h2>
      <p>
        Rating: {rating} / {TOTAL}
      </p>
      <StarRating rating={rating} />
      <div className='changeRating'>
        <label className="">
          Update Rating:{" "}
          <input
            type='number'
            value={rating}
            onChange={handleRatingChange}
            min='0'
            max={TOTAL}
            className='border text-center border-gray-500'
          />
        </label>
      </div>
    </section>
  );
}

export default SectionLists;
