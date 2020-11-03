import React, { Fragment, useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const renderItems = A =>
    A.map((i, idx) => (
      <Fragment key={i.title}>
        <div
          className={`title ${idx === activeIndex && 'active'}`}
          onClick={() => setActiveIndex(idx)}
        >
          <i className="dropdown icon" />
          {i.title}
        </div>
        <div className={`content ${idx === activeIndex && 'active'}`}>
          <p>{i.content}</p>
        </div>
      </Fragment>
    ))

  return <div className="ui styled accordion">{renderItems(items)}</div>
}

export default Accordion
