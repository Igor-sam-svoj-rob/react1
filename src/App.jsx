import React from "react";
import { FeedbackProvider } from "./Context/Context";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header";
import ListaKartica from "./Components/ListaKartica";
import Stats from "./Components/Shared/Stats";
import KarticaForma from "./Components/KarticaForma";
import Stranica from "./Stranice/Stranica";
import { FaArrowAltCircleRight } from "react-icons/fa";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Novi Logo" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <KarticaForma />
                <Stats />
                <ListaKartica />
              </>
            }
          ></Route>
          <Route path="/stranica" element={<Stranica />} />
        </Routes>
        <Link to="/stranica">
          <FaArrowAltCircleRight className="linkic" />
        </Link>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
