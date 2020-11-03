import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')

  const onChange = e => setTerm(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(term)
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onChange} />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
