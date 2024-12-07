import { useState } from "react";


import StarRatingPage from "./starRating/StarRatingPage";
import GridPage from "./grid/gridPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className='bg-red-400 font-extrabold md:w-[60%] mx-auto rounded-full my-4'>
        <ul className='flex justify-center gap-4'>
          <a href='/'>Grid Assignment</a>
          <a href='/star'>Star Assignment</a>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<GridPage />} />
        <Route path='/star' element={<StarRatingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
