import styled from "styled-components/native";
import { colors } from "../../library/colors";

export const HeaderButtonContainer = styled.TouchableOpacity`
  width: 10%;
  height: auto;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
  align-items: center;
  justify-content: center;
`;
export const HeaderButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${colors.white};
`;
