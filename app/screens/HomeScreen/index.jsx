import React, { useEffect, useState }  from 'react'
import { Header, Title, FlexContainer, ButtonContainer, ButtonText, Text, LightText, Body, TaskElement, TaskListText, TaskDateText, CheckboxWrapper, Box, Label, Container, CheckIcon } from './styled';
import { TaskElementList } from '../../library/constants';
import { colors } from '../../library/colors';
import ButtonTaskElement from '../../components/ButtonTaskElement';
import Layout from '../Layout';
import { Link, useRouter } from 'expo-router';
import HeaderButton from '../../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';
import MenuModal from '../../components/MenuModal';
import { FlatList } from 'react-native';
import { getTodayTasks } from '../../library/storage';

const HomeScreen = () => {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => setIsChecked((prev) => !prev);
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);
    const [todayTasks, setTodayTasks] = useState([]);

    const ButtonAddNewTask = ({ onPress, bgColor, title }) => (
        <ButtonContainer onPress={onPress} bgColor={bgColor}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    );
    
    const HandlePress = () => (
        router.push('/screens/EditTaskScreen')
    )

    useEffect(() => {
        const fetchTodayTasks = async () => {
          const tasks = await getTodayTasks(); // Fetch only today's tasks
          setTodayTasks(tasks);
          
          
        };
    
        fetchTodayTasks();
      }, []);

    
    return (
        <Layout>
            <>
                <Header>
                    <FlexContainer height={'50%'} width={'90%'} row justify={'space-between'}>
                        <FlexContainer width={'10%'}/>
                        <Title>Welcome!</Title>
                        <HeaderButton onPress={() => setModalVisible(true)}>
                            <Ionicons name="menu" size={35} color="black" />
                        </HeaderButton>
                    </FlexContainer>
                    <FlexContainer height={'50%'} width={'90%'} row justify={'space-evenly'}>
                        <FlexContainer width={'50%'}>
                            <Text>Today's Tasks</Text>
                            <LightText>{todayTasks.length + ' Tasks'}</LightText>
                        </FlexContainer>
                    </FlexContainer>
                </Header>
                <MenuModal 
                  visible={modalVisible}
                  onClose={() => setModalVisible(false)}
                />
                <Body>
                    <FlatList
                        data={todayTasks}
                        keyExtractor={(item) => index.id.toString()}  // Unique key for each element
                        renderItem={({ item }) => (
                        <ButtonTaskElement
                            onPress={() => HandlePress(item.id)}
                            title={item.title}
                            date={item.date}
                            isChecked={item.isChecked}  // You can replace with actual state for checkbox
                            toggleCheckbox={() => toggleCheckbox(item.id)}
                        />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </Body>
            </>
        </Layout>
    )
}

export default HomeScreen;