import React, { useContext } from "react";
import Context from "../Context/Context";
import Card from "./Shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

function StiliziraneKartice({ item }) {
  const { deleteKartice, editFeedback } = useContext(Context);

  const handleClick = () => {
    deleteKartice(item.id);
  };

  const handleEdit = () => {
    editFeedback(item);
  };

  return (
    <Card flip={true}>
      <div className="text-display">{item.text}</div>
      <div className="rating">{item.rating}</div>
      <button className="close" onClick={handleEdit}>
        <FaEdit />
      </button>
      <button className="close" onClick={handleClick}>
        <FaTimes />
      </button>
    </Card>
  );
}

export default StiliziraneKartice;
