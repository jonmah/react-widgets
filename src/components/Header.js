import React from 'react'

import Link from './Link'

const Header = () => (
  <div className="ui secondary pointing menu">
    <Link href="/" label="Accordian" />
    <Link href="/dropdown" label="Dropdown" />
    <Link href="/languageSelector" label="Language Selector" />
    <Link href="/search" label="Search" />
    <Link href="/songs" label="Songs" />
    <Link href="/translate" label="Translate" />
    <Link href="/youtube" label="YouTube" />
  </div>
)

export default Header
