import React from 'react'
import './HelpButton.css'

function HelpButton({ handleHelp }) {
  return (
    <div className="center">
      <button className='prevent-select btn-help center' onClick={ handleHelp }>Pista</button>
    </div>
  );
}

export default HelpButton