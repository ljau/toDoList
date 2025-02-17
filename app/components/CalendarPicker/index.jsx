import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { CalendarContainer, DateLabel, DateLabelItem, LabelText, ModalWrapper, ValueText } from "./styled";

const CalendarPicker = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    setDatePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    setSelectedTime(time);
    setTimePickerVisibility(false);
  };

  return (
    <CalendarContainer>
      <DateLabel onPress={() => setDatePickerVisibility(true)}>
        <DateLabelItem>
          <LabelText>Date:</LabelText>
          <ValueText>{selectedDate ? selectedDate.toLocaleDateString() : "Select a date"}</ValueText>
        </DateLabelItem>
      </DateLabel>

      <DateLabel onPress={() => setTimePickerVisibility(true)}>
        <DateLabelItem>
          <LabelText>Time:</LabelText>
          <ValueText>
            {selectedTime
              ? selectedTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
              : "Select a time"}
          </ValueText>
        </DateLabelItem>
      </DateLabel>

      <ModalWrapper>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={() => setDatePickerVisibility(false)}
          display="spinner"
        />
      </ModalWrapper>

      <ModalWrapper>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={() => setTimePickerVisibility(false)}
          display="spinner"
        />
      </ModalWrapper>
    </CalendarContainer>
  );
};

export default CalendarPicker;
