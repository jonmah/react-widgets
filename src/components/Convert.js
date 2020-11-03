import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('')
  const [debounced, setDebounced] = useState(translated)
  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(text), 1000)
    return () => clearTimeout(timeout)
  }, [text])
  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debounced,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      )
      setTranslated(data.data.translations[0].translatedText)
    }
    translate()
  }, [language, debounced])

  return <h1 className="ui header">{translated}</h1>
}

export default Convert
