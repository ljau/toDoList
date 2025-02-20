import styled from "styled-components/native";
import { Title } from "../../screens/HomeScreen/styled";
import { colors } from "../../library/colors";

export const HeaderContainer = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  background-color: ${colors.lightPurple};
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const HeaderTitle = styled(Title)`
  font-size: 20px;
`;

export default {};
