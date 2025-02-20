import styled from "styled-components/native";

export const AddTaskButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  align-self: center;
  width: 60px;
  height: 60px;
  background-color: #8a6cff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

export const ListContainer = styled.View`
  flex: 1;
  padding: 20px;
  width: 100%;
`;

export default {};
