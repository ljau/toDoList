import React from 'react'
import { MainView } from './styled'

const Layout = ({ children }) => {
  return (
    <MainView>
        {children}
    </MainView>
  )
}

export default Layout