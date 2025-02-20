import styled from "styled-components/native";
import { colors } from "../../library/colors";

export const ButtonUpdateContainer = styled.TouchableOpacity`
  width: 50%;
  min-height: 10%;
  padding: 10px;
  margin: 3%;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
`;
export const ButtonUpdateText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${colors.white};
`;

export default {};
