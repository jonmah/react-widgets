import React from 'react'

const Songs = ({ populate, select, selected, songs }) => {
  return songs.map(s => (
    <div className="item" key={s.title}>
      <div className="right floated content">
        <button className="ui button primary" onClick={() => select(s)}>
          Select
        </button>
      </div>
      <div className="content">{s.title}</div>
    </div>
  ))
}

export default Songs
