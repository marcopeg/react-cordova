import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import Button from 'react-bootstrap/lib/Button'

export const Header = () => (
  <div className='header'>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' · '}
    <Link to='/info' activeClassName='route--active'>
      Info
    </Link>
    <hr />
    <Button>foo</Button>
  </div>
)

export default Header
