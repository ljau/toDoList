import React from 'react'
import { TouchableOpacity } from 'react-native';
import { FlexContainer } from '../../screens/HomeScreen/styled';
import { TaskElement, TaskListText, TaskDateText, CheckboxWrapper, Box, CheckIcon } from './styled';

const ButtonTaskElement = ({onPress, title, date, isChecked, toggleCheckbox, id }) => (
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
            <TaskDateText>{date}</TaskDateText>
        </FlexContainer>
    </TaskElement>
)

export default ButtonTaskElement
