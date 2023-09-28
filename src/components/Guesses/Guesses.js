import React from "react";

function Guesses({ guesses = [] }) {
  console.log(guesses);
  return (
    <div className="guess-results">
      {guesses.map(({ label, id }) => (
        <p key={id} className="guess">
          {label.split("").map((letter, index) => (
            <span key={`${id}-letter-${index}`} className="cell">
              {letter}
            </span>
          ))}
          {[...Array(5 - label.length)].map((_, index) => (
            <span key={`${id}-empty-${index}`} className="cell"></span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
