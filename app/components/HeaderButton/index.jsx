import React from 'react'
import { HeaderButtonContainer } from './styled'

const HeaderButton = ({ children }) => {
    console.log('HeaderButton children:', children);
  return (
    <HeaderButtonContainer>
        {children}
    </HeaderButtonContainer>
  )
}

export default HeaderButton