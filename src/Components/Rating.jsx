import React, { useState } from "react";

function Rating({ odabran }) {
  const [odabrano, setOdabrano] = useState(1);
  const handleChange = (event) => {
    setOdabrano(+event.currentTarget.value);
    odabran(+event.currentTarget.value);
  };

  return (
    <ul className="ocjena">
      <li>
        <label htmlFor="broj1" className="form-control">
          <input
            type="radio"
            id="broj1"
            name="rating"
            value="1"
            onChange={handleChange}
            checked={odabrano === 1}
          />
          1
        </label>
      </li>
      <li>
        <label htmlFor="broj2" className="form-control">
          <input
            type="radio"
            id="broj2"
            name="rating"
            value="2"
            onChange={handleChange}
            checked={odabrano === 2}
          />
          2
        </label>
      </li>
      <li>
        <label htmlFor="broj3" className="form-control">
          <input
            type="radio"
            id="broj3"
            name="rating"
            value="3"
            onChange={handleChange}
            checked={odabrano === 3}
          />
          3
        </label>
      </li>
      <li>
        <label htmlFor="broj4" className="form-control">
          <input
            type="radio"
            id="broj4"
            name="rating"
            value="4"
            onChange={handleChange}
            checked={odabrano === 4}
          />
          4
        </label>
      </li>
      <li>
        <label htmlFor="broj5" className="form-control">
          <input
            type="radio"
            id="broj5"
            name="rating"
            value="5"
            onChange={handleChange}
            checked={odabrano === 5}
          />
          5
        </label>
      </li>
    </ul>
  );
}

export default Rating;
