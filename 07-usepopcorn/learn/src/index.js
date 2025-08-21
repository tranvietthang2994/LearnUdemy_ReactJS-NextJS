import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import "./index.css";
// import App from "./App";

function Test() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h1>Test Component</h1>
      <StarRating color="blue" maxRating={10} onSetRating={setRating} />
      <p>This movie was rated {rating} star</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Test />
  </React.StrictMode>
);
