import React, { useState } from 'react'

import LanguageSelectorContext from '../contexts/LanguageSelectorContext'
import LanguageSelectorForm from './LanguageSelectorForm'

const LanguageSelector = () => {
  const [language, setLanguage] = useState('english')

  return (
    <LanguageSelectorContext.Provider
      value={{ language: language, action: () => console.log('we did it!') }}
    >
      <div>
        Select a language:
        <i className="flag us" onClick={() => setLanguage('english')} />
        <i className="flag jp" onClick={() => setLanguage('japanese')} />
        {language}
        <LanguageSelectorForm />
      </div>
    </LanguageSelectorContext.Provider>
  )
}

export default LanguageSelector
