import React, { useState } from 'react'

function PlayerNameForm({ handleSubmit }) {
    const [name, setName] = useState("");

    const handleChange = (event) => {
      setName(event.target.value);
    };
    const onSubmit = (event) => {
      event.preventDefault();
      handleSubmit(name);
    };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      <button type="submit">Start Game</button>
    </form>
  );
}

export default PlayerNameForm