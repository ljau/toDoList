import React, { useState }  from 'react'
import { Header, Title, FlexContainer, ButtonContainer, ButtonText, Text, LightText, Body, TaskElement, TaskListText, TaskDateText, CheckboxWrapper, Box, Label, Container, CheckIcon } from './styled';
import { taskElementList } from '../../library/constants';
import { colors } from '../../library/colors';
import ButtonTaskElement from '../../components/ButtonTaskElement';
import Layout from '../Layout';
import { Link, useRouter } from 'expo-router';

const ButtonAddNewTask = ({ onPress, bgColor, title }) => (
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
);

const HandlePress = ({}) => (
    <Link href='/screens/NewTaskScreen' />
)

const HomeScreen = () => {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => setIsChecked((prev) => !prev);
    const router = useRouter();

    return (
        <Layout>
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
                            <ButtonAddNewTask
                                onPress={() => router.push('/screens/NewTaskScreen')}
                                title='New Task'
                                bgColor={colors.white}
                            />
                        </FlexContainer>
                    </FlexContainer>
                </Header>
                <Body>
                    {taskElementList.map(({title, date}, index) => (
                        <ButtonTaskElement 
                            onPress={() => HandlePress}
                            key={index}
                            title={title}
                            date={date}
                            isChecked={isChecked}
                            toggleCheckbox={toggleCheckbox}
                        />     
                    ))}
                </Body>
            </>
        </Layout>
    )
}

export default HomeScreen;