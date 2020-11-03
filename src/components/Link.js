import React from 'react'

const Link = ({ href, label }) => {
  const onClick = e => {
    if (e.metaKey || e.ctrlKey) {
      return
    }

    e.preventDefault()
    window.history.pushState({}, '', href)

    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }

  return (
    <a href={href} className="item" onClick={onClick}>
      {label}
    </a>
  )
}

export default Link
