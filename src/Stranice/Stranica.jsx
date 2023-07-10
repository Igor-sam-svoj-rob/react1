import React from "react";
import Card from "../Components/Shared/Card";
import { Link } from "react-router-dom";

function Stranica() {
  return (
    <Card>
      <div className="stranica">
        <h1>Lorem ipsum</h1>
        <Link to="/">Nazad na početnu</Link>
      </div>
    </Card>
  );
}

export default Stranica;
