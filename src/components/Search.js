import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState(term)
  const [results, setResults] = useState([])

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedTerm(term), 1000)
    return () => clearTimeout(timeout)
  }, [term])

  useEffect(() => {
    const search = async () => {
      const params = {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: debouncedTerm,
      }

      const wikiUrl = new URL('https://en.wikipedia.org/w/api.php')
      wikiUrl.search = new URLSearchParams(params)
      const response = await fetch(wikiUrl).then(response => response.json())
      console.log(response)

      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params,
      })
      setResults(data.query.search)
    }
    debouncedTerm && search()
  }, [debouncedTerm])

  const renderedResults = results.map(x => (
    <div className="item" key={x.pageid}>
      <div className="right floated content">
        <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${x.pageid}`}
        >
          Go
        </a>
      </div>
      <div className="content">
        <div className="header">{x.title}</div>
        <span dangerouslySetInnerHTML={{ __html: x.snippet }}></span>
      </div>
    </div>
  ))

  return (
    <div>
      <div className="ui form"></div>
      <div className="field">
        <label>Enter search term:</label>
        <input
          className="input"
          onChange={e => setTerm(e.target.value)}
          value={term}
        />
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  )
}

export default Search
