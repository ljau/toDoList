import styled from "styled-components/native";
import { colors } from "../../library/colors";

export const CalendarContainer = styled.View`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 25%;
  margin-top: 5%;
`;

export const DateLabel = styled.TouchableOpacity`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  padding: 10px 20px;
  border-radius: 8px;
  elevation: 5;
  margin-bottom: 10px;
`;

export const DateLabelItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LabelText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.green};
  margin-right: 5px;
`;

export const ValueText = styled.Text`
  font-size: 16px;
  color: ${colors.gray};
`;

export const ModalWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
