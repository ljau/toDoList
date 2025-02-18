import React, { useEffect, useState } from 'react'
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
import { getTasks, getTasksByCategory, getTodayTasks } from '../../library/storage'

const TasksList = () => {
    const { categoryId, filter } = useLocalSearchParams();
    const [taskData, setTaskData] = useState();
    const router = useRouter();
    const { id, name, description } = useLocalSearchParams();

    const toggleCheckbox = (index) => {
        setTaskData(prevTasks =>
        prevTasks.map((task, i) =>
          i === index ? { ...task, isChecked: !task.isChecked } : task
        )
      );
    };

    const handlePressTask = (taskId) => {
      router.push(`/screens/EditTaskScreen?taskId=${taskId}`);
    }

    useEffect(() => {
      const fetchTasks = async () => {
        let retrievedTasks = [];
  
        if (filter === "today") {
          retrievedTasks = await getTodayTasks(); // Get today's tasks
        } else if (id) {
          retrievedTasks = await getTasksByCategory(Number(id)); // Get tasks by category
        } else {
          retrievedTasks = await getTasks(); // Get all tasks
        }
  
        setTaskData(retrievedTasks);
      };
  
      fetchTasks();
    }, [categoryId, filter]);

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
                      onPress={() => handlePressTask(item.id)}
                      title={item.title}
                      date={new Date(item.date).toLocaleDateString()}
                      time={item.time}
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