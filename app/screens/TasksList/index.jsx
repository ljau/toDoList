import React, { useState } from 'react'
import Layout from '../Layout'
import Header from '../../components/Header'
import { MainBody } from '../NewTaskScreen/styled'
import ButtonTaskElement from '../../components/ButtonTaskElement'
import { TaskElementList } from '../../library/constants'
import { FlexContainer } from '../HomeScreen/styled'
import { AddTaskButton, ListContainer } from './styled'
import { FontAwesome5 } from '@expo/vector-icons'
import { colors } from '../../library/colors'
import { useRouter } from 'expo-router'
import { useLocalSearchParams } from "expo-router";
import { FlatList } from 'react-native'

const TasksList = () => {
    const [taskData, setTaskData] = useState(TaskElementList);
    const router = useRouter();
    const { id, name, description } = useLocalSearchParams();
    console.log( '\n Name: ', name, '\n ID: ', id, '\n Description: ', description );

    const toggleCheckbox = (index) => {
        setTaskData(prevTasks =>
        prevTasks.map((task, i) =>
          i === index ? { ...task, isChecked: !task.isChecked } : task
        )
      );
    };

    const handlePressTask = () => {
      router.push('/screens/EditTaskScreen')
    }

    return (
      <Layout>
        <Header screenTitle={name ? name : 'Tasks'} headerTitle={description ? description: 'All tasks'} />
        <MainBody>
            <FlexContainer height={'85%'} justify={'space-between'}>
                <FlexContainer height={'80%'} justify={'flex-start'}>
                  <ListContainer>
                  <FlatList
                    data={taskData}
                    keyExtractor={(item) => item.id}
                    style={{ width: "100%" }}
                    renderItem={({ item }) => (
                      <ButtonTaskElement
                      onPress={() => handlePressTask()}
                      title={item.title}
                      date={item.date}
                      isChecked={item.isChecked}
                      toggleCheckbox={() => toggleCheckbox(item.id-1)}
                      />
                    )}
                    showsVerticalScrollIndicator={false}
                  />
                  </ListContainer>
                </FlexContainer>
                <AddTaskButton onPress={() => router.push('/screens/NewTaskScreen')}>
                    <FontAwesome5 name="plus" size={30} color={colors.white} />
                </AddTaskButton>
            </FlexContainer>
        </MainBody>
      </Layout>
    );
  };

export default TasksList