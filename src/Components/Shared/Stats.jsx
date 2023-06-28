import React from "react";

function Stats({ kartica }) {
  let prosjek =
    kartica.reduce((suma, trenutnaVrijednost) => {
      return suma + trenutnaVrijednost.rating;
    }, 0) / kartica.length;

  prosjek = prosjek.toFixed(1);

  return (
    <div className="stats">
      <p>Broj kartica: {kartica.length}</p>
      <p>Prosječna ocjena: {isNaN(prosjek) ? 0 : prosjek}</p>
    </div>
  );
}

export default Stats;