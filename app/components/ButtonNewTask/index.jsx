import React from 'react'
import { TouchableOpacity } from 'react-native';
import { FlexContainer } from '../../screens/HomeScreen/styled';
import { TaskElement, TaskListText, TaskDateText, CheckboxWrapper, Box, CheckIcon } from './styled';

const ButtonNewTask = ({onPress, title, date, isChecked, toggleCheckbox}) => (
        <TaskElement onPress={onPress} >
        <FlexContainer width={'20%'}>
        <CheckboxWrapper>
            <TouchableOpacity onPress={toggleCheckbox}>
                <Box checked={isChecked}>
                    {isChecked && <CheckIcon>✓</CheckIcon>}
                </Box>
            </TouchableOpacity>
        </CheckboxWrapper>
        </FlexContainer>
        <FlexContainer width={'70%'} align={'flex-start'}>
            <TaskListText>{title}</TaskListText>
            <TaskDateText>{date}</TaskDateText>
        </FlexContainer>
    </TaskElement>
)

export default ButtonNewTask
