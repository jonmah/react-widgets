import React, { useState } from 'react'

import Header from './components/Header'
import Route from './components/Route'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import YouTube from './components/YouTube'
import LanguageSelector from './components/LanguageSelector'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JavaScript library',
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite library amongst engineers',
  },
  {
    title: 'How do you use React?',
    content: 'By creating components',
  },
]

const options = [
  { label: 'red', value: 'red' },
  { label: 'green', value: 'green' },
  { label: 'blue', value: 'blue' },
]

const App = () => {
  const [selected, setSelected] = useState(options[0])

  return (
    <>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          onSelectedChange={setSelected}
          options={options}
          selected={selected}
        />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/youtube">
        <YouTube />
      </Route>
      <Route path="/languageSelector">
        <LanguageSelector />
      </Route>
    </>
  )
}

export default App
