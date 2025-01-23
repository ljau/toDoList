import React from 'react'
import { HeaderContainer, HeaderTitle } from './styled'
import { FlexContainer } from '../../screens/HomeScreen/styled'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import HeaderButton from '../HeaderButton'
import { useRouter } from 'expo-router'

const Header = ({onMenuPress}) => {
    const router = useRouter();
  return (
    <HeaderContainer>
        <FlexContainer justify={'center'}>
            <FlexContainer width={'90%'} height={'30%'} row justify={'space-between'}>
                <HeaderButton onPress={() => {router.back()}}>
                    <FontAwesome5 name="angle-left" size={40} color="black" />
                </HeaderButton>
                <HeaderTitle>Tasks</HeaderTitle>
                <HeaderButton onPress={onMenuPress}>
                    <Ionicons name="menu" size={35} color="black" />
                </HeaderButton>
            </FlexContainer>
            <FlexContainer height={'70%'} width={'80%'} align={'flex-start'}>
                <HeaderTitle>New Task</HeaderTitle>
            </FlexContainer>
        </FlexContainer>
    </HeaderContainer>
  )
}

export default Header