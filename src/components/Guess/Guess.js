import React, {useState} from "react";

function Guess({changeGuess}) {
  const [guess, setGuess] = useState("");

  const handleGuess = (event) => {
    event.preventDefault();
    // convert guess to uppercase
    changeGuess(guess.toUpperCase());
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        required
        type="text"
        value={guess}
        onChange={({target: {value}}) => setGuess(value)}
        //pattern=".{5,}"
        minLength={3}
        maxLength={5}
      />
    </form>
  );
}

export default Guess;
