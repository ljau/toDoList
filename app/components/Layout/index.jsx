import React from 'react'
import { MainView } from './styled'

const Layout = ({ Children }) => {
  return (
    <MainView>
        {Children}
    </MainView>
  )
}

export default Layout