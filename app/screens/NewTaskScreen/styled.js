import styled from "styled-components/native";
import { colors } from "../../library/colors";

export const MainBody = styled.View`
  width: 100%;
  min-height: 80%;
  display: flex;
  background-color: ${colors.white};
  align-items: center;
  justify-content: space-evenly;
`;

export const MainHeader = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  background-color: ${colors.lightPurple};
  align-items: center;
  justify-content: center;
`;

export const NameInput = styled.TextInput`
  background-color: ${colors.lightGray};
  width: 80%;
  height: 20px;
`;
