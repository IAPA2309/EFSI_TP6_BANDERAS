import React from 'react'

function GuessForm({ handleGuess, helpLetter }) {
  return (
    <form onSubmit={handleGuess}>
      <input
        type="text"
        name="guess"
        placeholder="Ingresa el nombre del pais"
      />
      {helpLetter && <p>Pista: {helpLetter}</p>}
      <button type="submit">Adivinar</button>
    </form>
  );
}

export default GuessForm