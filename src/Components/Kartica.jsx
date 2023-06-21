import React, { useState } from "react";

function Kartica() {
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("Lorem ipsum");
  const handleClick = () => {
    setRating(10);
  };

  return (
    <div className="card">
      <div className="text-display">{text}</div>
      <div className="rating">{rating}</div>
      <button onClick={handleClick}>Klik</button>
    </div>
  );
}

export default Kartica;
