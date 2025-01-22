import React, { useState }  from 'react'
import { Header, Title, FlexContainer, ButtonContainer, ButtonText, Text, LightText, Body, TaskElement, TaskListText, TaskDateText, CheckboxWrapper, Box, Label, Container, CheckIcon } from './styled';
import Layout from '../Layout';
import { taskElementList } from '../../library/constants';
import ButtonNewTask from '../../components/ButtonNewTask';
import { colors } from '../../library/colors';

const ButtonAddNew = ({ onPress, bgColor, title }) => (
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
);

const HomeScreen = () => {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => setIsChecked((prev) => !prev);

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
                            <ButtonAddNew
                                onPress={() => true}
                                title='New Task'
                                bgColor={colors.white}
                            />
                        </FlexContainer>
                    </FlexContainer>
                </Header>
                <Body>
                    {taskElementList.map(({title, date}, index) => (
                        <ButtonNewTask 
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
        </Layout>
    )
}

export default HomeScreen;