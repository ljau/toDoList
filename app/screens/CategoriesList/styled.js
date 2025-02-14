import styled from "styled-components/native";
import { AddTaskButton } from "../TasksList/styled";
import { colors } from "../../library/colors";

export const AddCategoryButton = styled(AddTaskButton)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const CategoryButton = styled.TouchableOpacity`
  background-color: ${colors.mediumGray};
  padding: 0px 50px;
  margin: 10px;
  border-radius: 10px;
  width: 90%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const CategoryTitle = styled.Text`
  font-size: 18px;
  color: ${colors.black};
  font-weight: 500;
`;

export const CategoryText = styled.Text`
  font-size: 14px;
  color: ${colors.black};
  font-weight: 300;
`;
