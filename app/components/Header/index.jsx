import React, { useState } from 'react'
import { HeaderContainer, HeaderTitle } from './styled'
import { FlexContainer } from '../../screens/HomeScreen/styled'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import HeaderButton from '../HeaderButton'
import { useRouter } from 'expo-router'
import MenuModal from '../MenuModal'

const Header = ({ screenTitle, headerTitle}) => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <HeaderContainer>
        <MenuModal 
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
        <FlexContainer justify={'center'}>
            <FlexContainer width={'90%'} height={'30%'} row justify={'space-between'}>
                <HeaderButton onPress={() => {router.back()}}>
                    <FontAwesome5 name="angle-left" size={40} color="black" />
                </HeaderButton>
                <HeaderTitle>{screenTitle}</HeaderTitle>
                <HeaderButton onPress={() => setModalVisible(true)}>
                    <Ionicons name="menu" size={35} color="black" />
                </HeaderButton>
            </FlexContainer>
            <FlexContainer height={'70%'} width={'80%'} align={'flex-start'}>
                <HeaderTitle>{headerTitle}</HeaderTitle>
            </FlexContainer>
        </FlexContainer>
    </HeaderContainer>
  )
}

export default Header