import React from 'react'
import { HeaderContainer, HeaderTitle } from './styled'
import { FlexContainer } from '../../screens/HomeScreen/styled'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import HeaderButton from '../HeaderButton'

const Header = () => {
  return (
    <HeaderContainer>
        <FlexContainer justify={'center'}>
            <FlexContainer width={'90%'} height={'30%'} row justify={'space-between'}>
                <HeaderButton>
                    <FontAwesome5 name="angle-left" size={35} color="black" />
                </HeaderButton>
                <HeaderTitle>Test Header</HeaderTitle>
                <Ionicons name="menu" size={35} color="black" />
            </FlexContainer>
            <FlexContainer height={'70%'} width={'80%'} align={'flex-start'}>
                <HeaderTitle>New Task</HeaderTitle>
            </FlexContainer>
        </FlexContainer>
    </HeaderContainer>
  )
}

export default Header