import React, { useState } from 'react'
import Layout from '../Layout'
import Header from '../../components/Header'
import { MainBody } from '../NewTaskScreen/styled'
import ButtonTaskElement from '../../components/ButtonTaskElement'
import { taskElementList } from '../../library/constants'
import { FlexContainer } from '../HomeScreen/styled'
import { AddTaskButton } from './styled'
import { FontAwesome5 } from '@expo/vector-icons'
import { colors } from '../../library/colors'
import { useRouter } from 'expo-router'

const TasksList = () => {
    const [taskData, setTaskData] = useState(taskElementList);
    const router = useRouter();
  
    const toggleCheckbox = (index) => {
        setTaskData(prevTasks =>
        prevTasks.map((task, i) =>
          i === index ? { ...task, isChecked: !task.isChecked } : task
        )
      );
    };
  
    return (
      <Layout>
        <Header screenTitle={"Tasks"} headerTitle={"Tasks list"} />
        <MainBody>
            <FlexContainer height={'80%'} justify={'space-between'}>
                <FlexContainer height={'100%'} justify={'flex-start'}>

                {taskData.map(({ title, date, isChecked }, index) => (
                    <ButtonTaskElement
                    key={index}
                    onPress={() => true}
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