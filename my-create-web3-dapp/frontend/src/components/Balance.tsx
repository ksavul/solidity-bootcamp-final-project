// SectionI.jsx
import React, { useState } from "react";

function Balance() {
  const [pokeTokens, setPokeTokens] = useState(10);
  const [cards, setCards] = useState([]);

  const handleConvertToCards = () => {
    // Logic to convert PokeTokens to cards and update 'cards' state
  };
  //In the handleConvertToCards function,
  //implement the logic to convert PokeTokens to a random set of cards and update the cards state accordingly.

  return (
    <div>
      <h2>Landing / Setup Page</h2>
      <p>You have {pokeTokens} PokeTokens.</p>
      <button onClick={handleConvertToCards}>
        Convert PokeTokens to Cards
      </button>
      <h3>Your Cards</h3>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>{card}</li>
        ))}
      </ul>
      <button>Trade</button>
      <button>Play</button>
    </div>
  );
}

export default Balance;
