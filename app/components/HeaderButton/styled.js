import styled from "styled-components/native";
import { colors } from "../../library/colors";

export const HeaderButtonContainer = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
  align-items: center;
  justify-content: center;
`;

export default {};
