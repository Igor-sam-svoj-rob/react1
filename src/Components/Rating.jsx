import React, { useState, useContext, useEffect } from "react";
import Context from "../Context/Context";

function Rating({ odabran }) {
  const [odabrano, setOdabrano] = useState(1);
  const { editKartica } = useContext(Context);

  const handleChange = (event) => {
    setOdabrano(+event.currentTarget.value);
    odabran(+event.currentTarget.value);
  };

  useEffect(() => {
    setOdabrano(editKartica.kartica.rating);
  }, [editKartica]);

  const ratings = [1, 2, 3, 4, 5];

  return (
    <ul className="ocjena">
      {ratings.map((rating) => (
        <li key={rating}>
          <label htmlFor={`broj${rating}`} className="form-control">
            <input
              type="radio"
              id={`broj${rating}`}
              name="rating"
              value={rating}
              onChange={handleChange}
              checked={odabrano === rating}
            />
          </label>
          {rating}
        </li>
      ))}
    </ul>
  );
}

export default Rating;
