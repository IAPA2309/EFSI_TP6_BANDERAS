import React from 'react'
import './HelpButton.css'

function HelpButton({ handleHelp }) {
  return <button onClick={ handleHelp }>Pista</button>;
}

export default HelpButton