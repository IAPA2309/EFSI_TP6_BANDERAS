import React from 'react'
import './FlagImage.css';

function FlagImage({ flagUrl }) {
  return (
    <div className='center'>
      <img src={flagUrl} alt='Flag'/>
    </div>
  )
}

export default FlagImage