import React from 'react'
import { ButtonUpdateContainer, ButtonUpdateText } from './styled'

const ButtonUpdateTask = ({bgColor, title, onPress}) => {
    return(
        <ButtonUpdateContainer bgColor={bgColor} onPress={onPress}>
            <ButtonUpdateText>
                {title}
            </ButtonUpdateText>
        </ButtonUpdateContainer>
)
  
}

export default ButtonUpdateTask