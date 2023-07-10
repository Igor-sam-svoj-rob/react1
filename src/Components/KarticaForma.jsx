import React, { useContext, useState, useEffect } from "react";
import Context from "../Context/Context";
import Card from "./Shared/Card";
import Button from "./Shared/Button";
import Rating from "./Rating";

function KarticaForma() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [poruka, setPoruka] = useState("");
  const [rating, setRating] = useState(5);
  const { handleFeedback, editKartica, updateFeedback } = useContext(Context);

  useEffect(() => {
    if (editKartica.edit === true) {
      setBtnDisabled(false);
      setText(editKartica.kartica.text);
      setRating(editKartica.kartica.rating);
    }
  }, [editKartica]);

  const handleTextChange = (event) => {
    const provjera = event.target.value;
    setText(provjera);
    if (provjera === "") {
      setBtnDisabled(true);
      setPoruka(null);
    } else if (provjera !== "" && provjera.trim().length < 6) {
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
    if (editKartica.edit === true) {
      updateFeedback(editKartica.kartica.id, noviUnos);
    } else {
      handleFeedback(noviUnos);
    }

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
