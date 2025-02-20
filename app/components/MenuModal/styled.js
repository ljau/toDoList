import styled from "styled-components/native";
import { colors } from "../../library/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-weight: bold;
`;

export const ModalOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.View`
  width: 80%;
  padding: 20px;
  background-color: ${colors.white};
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70%;
  opacity: 0.8;
`;

export const ModalText = styled.Text`
  font-size: 18px;
  color: ${colors.black};
  margin-bottom: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: ${colors.gray};
  padding: 12px 20px;
  border-radius: 8px;
  width: 100%;
  align-items: center;
  opacity: 0.8;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: ${colors.lightPurple};
  padding: 12px 20px;
  border-radius: 8px;
  width: 100%;
  align-items: center;
  opacity: 0.8;
`;

export default {};
