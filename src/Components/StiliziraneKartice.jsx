import React from "react";
import Card from "./Shared/Card";
import { FaTimes } from "react-icons/fa";

function StiliziraneKartice({ item, handleDelete }) {
  const handleClick = () => {
    handleDelete(item.id);
  };

  return (
    <Card flip={true}>
      <div className="text-display">{item.text}</div>
      <div className="rating">{item.rating}</div>
      <button className="close" onClick={handleClick}>
        <FaTimes />
      </button>
    </Card>
  );
}

export default StiliziraneKartice;
