import React from 'react'
import './HelpButton.css'

function HelpButton({ handleHelp }) {
  return <button className='prevent-select btn-help' onClick={ handleHelp }>Pista</button>;
}

export default HelpButton