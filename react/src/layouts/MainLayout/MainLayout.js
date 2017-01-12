import './MainLayout.scss'

import React from 'react'
import MenuBar from 'components/MenuBar'

export const MainLayout = ({ children }) => (
  <div>
    {children}
    <MenuBar />
  </div>
)

MainLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default MainLayout
