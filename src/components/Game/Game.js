import React from "react";
import { v4 as uuidv4 } from "uuid";

import Guess from "../Guess";
import Guesses from "../Guesses";
import { sample } from "../../utils";
import { WORDS } from "../../data";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    Array(5)
      .fill()
      .map(() => ({ label: "", id: uuidv4() }))
  );

  const changeGuess = (guess) => {
    setGuesses((guesses) => [
      ...guesses.slice(-4),
      { label: guess, id: uuidv4() },
    ]);
  };

  return (
    <>
      <Guesses guesses={guesses} />
      <Guess changeGuess={changeGuess} />
    </>
  );
}

export default Game;
