import React from 'react'
import { Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ButtonText, CloseButton, Container, ModalContainer, ModalOverlay, ModalText } from './styled';

const MenuModal = ({ visible, onClose }) => {
  
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
                            <ModalText>Calendar</ModalText>
                            <ModalText>Categories</ModalText>
                            <CloseButton onPress={onClose}>
                                <ButtonText>Cerrar</ButtonText>
                            </CloseButton>
                        </ModalContainer>
                    </TouchableWithoutFeedback>
                </ModalOverlay>
            </TouchableWithoutFeedback>
        </Modal>
      </Container>
    );
  }
export default MenuModal