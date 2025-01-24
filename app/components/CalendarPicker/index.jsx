import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { CalendarContainer, DateLabel, DateLabelItem, LabelText, ValueText } from "./styled";

const CalendarPicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); // Fecha por defecto
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const handleDateConfirm = (date) => {
      setSelectedDate((prevDate) => new Date(date.setHours(prevDate.getHours(), prevDate.getMinutes())));
      setDatePickerVisibility(false)
    };
  
    const handleTimeConfirm = (time) => {
      setSelectedDate((prevDate) => new Date(prevDate.setHours(time.getHours(), time.getMinutes())));
      setTimePickerVisibility(false);
    };

  return (
<CalendarContainer>
      <DateLabel onPress={() => setDatePickerVisibility(true)}>
        <DateLabelItem>
          <LabelText>Date:</LabelText>
          <ValueText>{selectedDate.toLocaleDateString()}</ValueText>
        </DateLabelItem>
      </DateLabel>

      <DateLabel onPress={() => setTimePickerVisibility(true)}>
        <DateLabelItem>
          <LabelText>Time:</LabelText>
          <ValueText>
            {selectedDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </ValueText>
        </DateLabelItem>
      </DateLabel>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={() => setDatePickerVisibility(false)}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={() => setTimePickerVisibility(false)}
      />
    </CalendarContainer>
    
  );
};

export default CalendarPicker;
