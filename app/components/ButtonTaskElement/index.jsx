import React from 'react'
import { TouchableOpacity } from 'react-native';
import { FlexContainer } from '../../screens/HomeScreen/styled';
import { TaskElement, TaskListText, TaskDateText} from './styled';

const ButtonTaskElement = ({onPress, title, date, time, id }) => (
    <TaskElement onPress={onPress} >
        <FlexContainer width={'80%'} align={'flex-start'}>
            <TaskListText>{title}</TaskListText>
            <FlexContainer row width={'100%'} height={'auto'} justify={'space-between'} align={'flex-start'}>
                <TaskDateText>{date}</TaskDateText>
                <TaskDateText>{time}</TaskDateText>
            </FlexContainer>
        </FlexContainer>
    </TaskElement>
)

export default ButtonTaskElement
