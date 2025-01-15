import React, { useState }  from 'react'
import { Header, Title, FlexContainer, ButtonContainer, ButtonText, Text, LightText, Body, TaskElement, TaskListText, TaskDateText, CheckboxWrapper, Box, Label, Container, CheckIcon } from './styled';
import Layout from '../Layout';
import { TouchableOpacity } from 'react-native';


const ButtonAddNew = ({ onPress, bgColor, title }) => (
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
);
const ButtonTaskElement = ({onPress, title, date, isChecked, toggleCheckbox}) => (
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

const taskElementList = [
    {title: 'Buy Milk', date: '8:00 - 9:00'},
    {title: 'Team Meeting', date: '12:00 - 12:30'},
    {title: 'Team Meeting', date: '12:00 - 12:30'},
    {title: 'Team Meeting', date: '12:00 - 12:30'},
]
const HomeScreen = () => {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => setIsChecked((prev) => !prev);

    return (
        <Layout Children={
            <>
                <Header>
                    <FlexContainer height={'50%'}>
                        <Title>Welcome!</Title>
                    </FlexContainer>
                    <FlexContainer height={'50%'} row>
                        <FlexContainer width={'50%'}>
                            <Text>Today</Text>
                            <LightText>5 tasks</LightText>
                        </FlexContainer>
                        <FlexContainer width={'50%'}>
                            <ButtonAddNew
                                onPress={() => true}
                                title='New Task'
                                bgColor='white'
                            />
                        </FlexContainer>
                    </FlexContainer>
                </Header>
                <Body>
                    {taskElementList.map(({title, date}, index) => (
                        <ButtonTaskElement 
                            onPress={() => true}
                            key={index}
                            title={title}
                            date={date}
                            isChecked={isChecked}
                            toggleCheckbox={toggleCheckbox}
                        />     
                    ))}
                </Body>
            </>
    }/>
    )
}

export default HomeScreen;