import React from 'react'
import { HeaderButtonContainer } from './styled'

const HeaderButton = ({ children }) => {
  return (
    <HeaderButtonContainer>
        {children}
    </HeaderButtonContainer>
  )
}

export default HeaderButton