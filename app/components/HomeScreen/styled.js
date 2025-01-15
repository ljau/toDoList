import styled from "styled-components/native";

export const FlexContainer = styled.View`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  display: flex;
  align-items: ${(props) => props.align || "center"};
  justify-content: center;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
`;

export const Header = styled.View`
  width: 100%;
  height: 30%;
  display: flex;
  background-color: #a167a5;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.View`
  width: 100%;
  height: 70%;
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: 500;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: 500;
`;

export const LightText = styled.Text`
  font-size: 15px;
  color: white;
  font-weight: 500;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 50%;
  height: 50%;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const TaskListText = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  color: gray;
`;

export const TaskDateText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: gray;
`;

export const TaskElement = styled.TouchableOpacity`
  width: 70%;
  height: 15%;
  background-color: lightgray;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  border-radius: 10px;
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`;

export const CheckboxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Box = styled.View`
  width: 24px;
  height: 24px;
  border: 2px solid #c0c0c0;
  background-color: ${(props) => (props.checked ? "#4caf50" : "white")};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const CheckIcon = styled.Text`
  color: white;
  font-size: 18px;
`;

export const Container = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
