import React from 'react'
import { ButtonUpdateContainer, ButtonUpdateText } from './styled'

const ButtonUpdateTask = ({bgColor, title}) => {
    return(
        <ButtonUpdateContainer bgColor={bgColor}>
            <ButtonUpdateText>
                {title}
            </ButtonUpdateText>
        </ButtonUpdateContainer>
)
  
}

export default ButtonUpdateTask