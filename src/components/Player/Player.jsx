import React from 'react'

function Player({ name, points }) {
  return (
    <div>
      <h2>Player: {name}</h2>
      <p>Points: {points}</p>
    </div>
  );
}

export default Player