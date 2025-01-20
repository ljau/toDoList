import styled from "styled-components/native";
import { colors } from "../../library/colors";
import { Title } from "../HomeScreen/styled";

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
  background-color: ${colors.mediumGray};
  width: 100%;
  height: 10%;
  border-radius: 10px;
  margin: 10px 0px 10px 0px;
`;

export const DescriptionInput = styled.TextInput`
  background-color: ${colors.mediumGray};
  border-radius: 10px;
  margin: 10px 0px 10px 0px;
  height: 30%;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
`;

export const TaskTitle = styled(Title)`
  font-size: 20px;
`;

export const DescriptionTitle = styled.Text`
  font-size: 18px;
  color: ${colors.black};
  font-weight: 400;
`;

export const TaskButton = styled.TouchableOpacity`
  width: 50%;
  height: 50%;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
`;
export const TaskButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;
