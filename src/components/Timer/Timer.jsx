import React from 'react'

function Timer({ seconds }) {
  return (
    <p>
      ⌚: <b>{seconds}s</b>
    </p>
  );
}

export default Timer