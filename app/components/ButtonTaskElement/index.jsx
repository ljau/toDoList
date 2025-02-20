import React from 'react'
import { TouchableOpacity } from 'react-native';
import { FlexContainer } from '../../screens/HomeScreen/styled';
import { TaskElement, TaskListText, TaskDateText, CheckboxWrapper, Box, CheckIcon } from './styled';

const ButtonTaskElement = ({onPress, title, date, time, isChecked, toggleCheckbox, id }) => (
    <TaskElement onPress={onPress} >
        <FlexContainer width={'20%'}>
        <CheckboxWrapper>
        <TouchableOpacity onPress={() => toggleCheckbox(id)}>
        <Box checked={isChecked}>
                    {isChecked && <CheckIcon>✓</CheckIcon>}
                </Box>
            </TouchableOpacity>
        </CheckboxWrapper>
        </FlexContainer>
        <FlexContainer width={'70%'} align={'flex-start'}>
            <TaskListText>{title}</TaskListText>
            <FlexContainer row width={'55%'} height={'auto'} justify={'space-between'} align={'flex-start'}>
                <TaskDateText>{date}</TaskDateText>
                <TaskDateText>{time}</TaskDateText>
            </FlexContainer>
        </FlexContainer>
    </TaskElement>
)

export default ButtonTaskElement
