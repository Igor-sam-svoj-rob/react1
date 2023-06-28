import React, { useState } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";
import Rating from "./Rating";

function KarticaForma({ handleFeedback }) {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [poruka, setPoruka] = useState("");
  const [rating, setRating] = useState(5);

  const handleTextChange = (event) => {
    setText(event.target.value);
    if (event.target.value === "") {
      setBtnDisabled(true);
      setPoruka(null);
    } else if (
      event.target.value !== "" &&
      event.target.value.trim().length < 6
    ) {
      setPoruka("Mora biti barem 6 slova");
      setBtnDisabled(true);
    } else {
      setPoruka(null);
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noviUnos = {
      text,
      rating,
    };
    handleFeedback(noviUnos);
    setText("");
  };

  return (
    <Card>
      <form className="input-forma" onSubmit={handleSubmit}>
        <Rating odabran={(rating) => setRating(rating)} />
        <div className="input-polja">
          <input
            type="text"
            placeholder="unesite tekst"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Pošalji
          </Button>
        </div>
        {poruka && <div className="poruka">{poruka}</div>}
      </form>
    </Card>
  );
}

export default KarticaForma;
