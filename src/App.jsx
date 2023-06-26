import React, { useState } from "react";
import Header from "./Components/Header";
import karticaData from "./Data/KarticaData";
import ListaKartica from "./Components/ListaKartica";

function App() {
  const [kartica, setKartica] = useState(karticaData);
  const deleteKartice = (id) => {
    console.log("Dolazim iz App.jsx-a", id);
  };

  return (
    <>
      <Header text="Novi Logo" />
      <ListaKartica kartica={kartica} handleDelete={deleteKartice} />
    </>
  );
}

export default App;
