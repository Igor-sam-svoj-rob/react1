import React, { useState } from "react";
import Header from "./Components/Header";
import karticaData from "./Data/KarticaData";
import ListaKartica from "./Components/ListaKartica";
import Stats from "./Components/Shared/Stats";
import KarticaForma from "./Components/KarticaForma";

function App() {
  const [kartica, setKartica] = useState(karticaData);

  const handleFeedback = (unos) => {
    console.log(unos);
  };
  const deleteKartice = (id) => {
    setKartica(kartica.filter((item) => item.id != id));
  };

  return (
    <>
      <Header text="Novi Logo" />
      <KarticaForma handleFeedback={handleFeedback} />
      <Stats kartica={kartica} />
      <ListaKartica kartica={kartica} handleDelete={deleteKartice} />
    </>
  );
}

export default App;
