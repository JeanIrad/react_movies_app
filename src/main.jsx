import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from './App'
// import './index.css'

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="brown" onSetRating={setMovieRating} />
      <p>this movie was rated {movieRating} stars</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating color="green"
      messages={["tres mal", "mal", "bon", "beaucoup bon", "tres bon"]}
      maxRating={6}
    />
    <StarRating maxRating={10} defaultRating={3} />
    <Test />
  </React.StrictMode>
);
