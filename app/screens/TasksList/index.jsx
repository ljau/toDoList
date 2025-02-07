import React, { useState } from 'react'
import Layout from '../Layout'
import Header from '../../components/Header'
import { MainBody } from '../NewTaskScreen/styled'
import ButtonTaskElement from '../../components/ButtonTaskElement'
import { TaskElementList } from '../../library/constants'
import { FlexContainer } from '../HomeScreen/styled'
import { AddTaskButton } from './styled'
import { FontAwesome5 } from '@expo/vector-icons'
import { colors } from '../../library/colors'
import { useRouter } from 'expo-router'
import { useLocalSearchParams } from "expo-router";

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
            <FlexContainer height={'80%'} justify={'space-between'}>
                <FlexContainer height={'100%'} justify={'flex-start'}>

                {taskData.map(({ title, date, isChecked }, index) => (
                    <ButtonTaskElement
                    key={index}
                    onPress={() => handlePressTask()}
                    title={title}
                    date={date}
                    isChecked={isChecked}
                    toggleCheckbox={() => toggleCheckbox(index)}
                    />
                ))}
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