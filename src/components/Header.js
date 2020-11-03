import React from 'react'

import Link from './Link'

const Header = () => (
  <div className="ui secondary pointing menu">
    <Link href="/" label="Accordian" />
    <Link href="/search" label="Search" />
    <Link href="/dropdown" label="Dropdown" />
    <Link href="/translate" label="Translate" />
    <Link href="/youtube" label="YouTube" />
    <Link href="/languageSelector" label="Language Selector" />
  </div>
)

export default Header
