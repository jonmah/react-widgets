import React, { useContext } from 'react'

import LanguageSelectorContext from '../contexts/LanguageSelectorContext'

const Button = () => {
  const context = useContext(LanguageSelectorContext)
  console.log(context)
  return (
    <button className="ui button primary" onClick={context.action}>
      Submit in {context.language}
    </button>
  )
}

export default Button
