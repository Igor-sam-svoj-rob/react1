import React, { createContext, useState } from "react";
import { v4 as uuid4 } from "uuid";

const Context = createContext();

export const FeedbackProvider = ({ children }) => {
  const [kartica, setKartica] = useState([
    {
      id: 1,
      rating: 5,
      text: "lorem ipsum dolor",
    },
    {
      id: 2,
      rating: 4,
      text: "lorem ipsum dolor",
    },
    {
      id: 3,
      rating: 2,
      text: "lorem ipsum dolor",
    },
    {
      id: 4,
      rating: 3,
      text: "lorem ipsum dolor",
    },
    {
      id: 5,
      rating: 1,
      text: "lorem ipsum dolor",
    },
    {
      id: 6,
      rating: 5,
      text: "lorem ipsum dolor",
    },
  ]);

  const deleteKartice = (id) => {
    setKartica(kartica.filter((item) => item.id !== id));
  };

  const handleFeedback = (unos) => {
    unos.id = uuid4();
    setKartica([unos, ...kartica]);
  };

  const [editKartica, setEditKartica] = useState({
    kartica: {},
    edit: false,
  });

  const editFeedback = (kartica) => {
    setEditKartica({
      kartica,
      edit: true,
    });
  };

  const updateFeedback = (id, updateKartice) => {
    setKartica(
      kartica.map((karta) =>
        karta.id === id ? { ...karta, ...updateKartice } : karta
      )
    );
  };

  return (
    <Context.Provider
      value={{
        kartica,
        deleteKartice,
        handleFeedback,
        editFeedback,
        editKartica,
        updateFeedback,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
