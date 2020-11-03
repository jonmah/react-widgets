import React, { useEffect, useRef, useState } from 'react'

const Dropdown = ({ label, onSelectedChange, options, selected }) => {
  const [expanded, setExpanded] = useState(false)
  // const [visible, setVisible] = useState(true)

  const ref = useRef()
  useEffect(() => {
    const onBodyClick = e => {
      if (ref && ref.current && ref.current.contains(e.target)) {
        return
      }
      setExpanded(false)
    }

    document.body.addEventListener('click', onBodyClick)

    return () => {
      document.body.removeEventListener('click', onBodyClick)
    }
  }, [])

  const renderOptions = options
    .filter(x => x !== selected)
    .map(x => (
      <div className="item" key={x.value} onClick={() => onSelectedChange(x)}>
        {x.label}
      </div>
    ))

  return (
    <div>
      {/* <button onClick={() => setVisible(!visible)}>Toggle Dropdown</button> */}
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div
            className={`ui selection dropdown ${expanded && 'visible active'}`}
            onClick={() => setExpanded(!expanded)}
          >
            <i className="dropdown icon"></i>
            <div className="text">{`Selected: ${selected.label}`}</div>
            <div className={`menu ${expanded && 'visible transition'}`}>
              {renderOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
