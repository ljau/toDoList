import React from 'react'
import { HeaderButtonContainer } from './styled'

const HeaderButton = ({ children, onPress }) => {
  return (
    <HeaderButtonContainer onPress={onPress}>
        {children}
    </HeaderButtonContainer>
  )
}

export default HeaderButton