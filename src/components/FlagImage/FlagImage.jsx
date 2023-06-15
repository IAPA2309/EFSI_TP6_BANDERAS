import React from 'react'
import './FlagImage.css';

function FlagImage({ flagUrl }) {
  return <img src={flagUrl} alt='Flag'/>
}

export default FlagImage