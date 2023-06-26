import React from "react";
import StiliziraneKartice from "./StiliziraneKartice";

function ListaKartica({ kartica, handleDelete }) {
  if (!kartica || kartica.length === 0) {
    return <p>Nema sadržaja</p>;
  }
  return (
    <div className="lista-kartica">
      {kartica.map((item) => (
        <StiliziraneKartice
          key={item.id}
          item={item}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ListaKartica;
