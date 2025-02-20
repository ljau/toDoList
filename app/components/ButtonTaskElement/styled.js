import styled from "styled-components/native";
import { colors } from "../../library/colors";

export const TaskListText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: ${colors.darkGray};
`;

export const TaskDateText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${colors.gray};
`;

export const TaskElement = styled.TouchableOpacity`
  width: 90%;
  height: 80px;
  background-color: ${colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  border-radius: 10px;
  flex-direction: row;
  margin: 10px;
  border: 3px solid ${colors.lightPurple};
`;

export const Label = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`;

export const Box = styled.View`
  width: 24px;
  height: 24px;
  border: 2px solid #d59eff;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const CheckIcon = styled.Text`
  color: ${colors.black};
  font-size: 18px;
`;

export const Container = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export default {};
