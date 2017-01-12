import './MenuBar.scss'

import React from 'react'
import { Link } from 'react-router'

import Glyphicon from 'react-bootstrap/lib/Glyphicon'

export const MenuBar = () => (
  <div className='menu-bar'>
    <Link to='/feed' className='menu-bar__item' activeClassName='menu-bar__item--active'>
      <Glyphicon glyph='list' />
    </Link>
    <Link to='/campaigns' className='menu-bar__item' activeClassName='menu-bar__item--active'>
      <Glyphicon glyph='usd' />
    </Link>
    <Link to='/create' className='menu-bar__item menu-bar__item--inverse'>
      <Glyphicon glyph='plus' />
    </Link>
    <Link to='/chat' className='menu-bar__item' activeClassName='menu-bar__item--active'>
      <Glyphicon glyph='comment' />
    </Link>
    <Link to='/profile' className='menu-bar__item' activeClassName='menu-bar__item--active'>
      <Glyphicon glyph='user' />
    </Link>
  </div>
)

export default MenuBar
