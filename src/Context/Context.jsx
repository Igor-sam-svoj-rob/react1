import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

export const FeedbackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [kartica, setKartica] = useState([]);

  useEffect(() => {
    fetch("/kartice?_sort=id&_order=desc")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Niste dohvatili podatke");
        }
        return response.json();
      })
      .then((data) => {
        setKartica(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Greška:", error);
      });
  }, []);

  const deleteKartice = async (id) => {
    await fetch(`/kartice/${id}`, { method: "DELETE" });
    setKartica(kartica.filter((item) => item.id !== id));
  };

  const handleFeedback = async (unos) => {
    const response = await fetch("/kartice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(unos),
    });

    const data = await response.json();
    setKartica([data, ...kartica]);
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

  const updateFeedback = async (id, updateKartice) => {
    const response = await fetch(`/kartice/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateKartice),
    });

    const data = await response.json();
    setKartica(
      kartica.map((karta) => (karta.id === id ? { ...karta, ...data } : karta))
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
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
