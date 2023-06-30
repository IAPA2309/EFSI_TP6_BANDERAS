import React from 'react'
import './GuessForm.css'

function GuessForm({ handleGuess, helpLetter }) {
  return (
    <>
      <form onSubmit={handleGuess} className="center">
        <input
          type="text"
          name="guess"
          placeholder="Ingresa el nombre del pais"
        />
        <button type="submit" className="btn prevent-select">
          Adivinar
        </button>
      </form>
      {helpLetter && <p>Pista (Letra aleatoria): {helpLetter}</p>}
    </>
  );
}

export default GuessForm