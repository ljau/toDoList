import React from 'react'
import { Modal, TouchableWithoutFeedback } from 'react-native';
import { ButtonText, CloseButton, Container, ModalButton, ModalContainer, ModalOverlay, ModalText } from './styled';
import { FlexContainer } from '../../screens/HomeScreen/styled';
import { useRouter } from 'expo-router';

const MenuModal = ({ visible, onClose }) => {
  const router = useRouter();
    return (
      <Container>
        <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <ModalOverlay>
                    <TouchableWithoutFeedback onPress={() => {}}>
                        <ModalContainer>
                          <FlexContainer height={'60%'} justify={'space-evenly'}>
                            <ModalButton>
                              <ButtonText>Categories</ButtonText>
                            </ModalButton>
                            <ModalButton onPress={() => router.push('/screens/CreateCategoryScreen')}>
                              <ButtonText>Create Category</ButtonText>
                            </ModalButton>
                          </FlexContainer>
                          <FlexContainer height={'30%'} justify={'flex-end'}>
                            <CloseButton onPress={onClose}>
                                <ButtonText>Cerrar</ButtonText>
                            </CloseButton>
                          </FlexContainer>
                        </ModalContainer>
                    </TouchableWithoutFeedback>
                </ModalOverlay>
            </TouchableWithoutFeedback>
        </Modal>
      </Container>
    );
  }
export default MenuModal