import React, { useState } from 'react'
import Layout from '../Layout';
import { MainBody, DescriptionTitle, NameInput, DescriptionInput } from './styled';
import { FlexContainer } from '../HomeScreen/styled';
import ButtonUpdateTask from '../../components/ButtonUpdateTask';
import { colors } from '../../library/colors';
import Header from '../../components/Header';
import CalendarPicker from '../../components/CalendarPicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { getTasks, saveTask } from '../../library/storage';

const NewTaskScreen = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskname, setTaskname] = useState("");
    const router = useRouter();

    const handleSaveTask = async () => {
      if (taskname.trim()) {
        try {
          // Retrieve the last used task ID from AsyncStorage
          const lastTaskId = await AsyncStorage.getItem('lastTaskId');
          const newTaskId = lastTaskId ? parseInt(lastTaskId) + 1 : 1;
    
          // Create new task with a consecutive ID
          const newTask = {
            id: newTaskId,
            title: taskname,
            description: taskDescription,
            date: '',
            time: '',
            categoryId: '', // Ensure the task is linked to a category
          };
    
          // Save task to storage
          await saveTask(newTask);
          console.log('Task saved:', newTask);
    
          // Update and persist the last used task ID
          await AsyncStorage.setItem('lastTaskId', newTaskId.toString());
    
          // Fetch updated tasks list
          const tasks = await getTasks();
          console.log('Tasks:', tasks);
          router.push('/')
        } catch (error) {
          console.error('Error saving task:', error);
        }
      } else {
        console.error('Task title cannot be empty');
      }
    };
    
    

    
  return (
    <Layout>
        <>
        <Header screenTitle={'Tasks'} headerTitle={'New Task'}/>
        <MainBody>
          <FlexContainer height={'80%'} width={'80%'} align={'flex-start'} justify={'flex-start'}>
            <DescriptionTitle>Task Name</DescriptionTitle>
            <NameInput 
              value={taskname}
              onChangeText={setTaskname}
            />
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionInput 
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              value={taskDescription}
              onChangeText={setTaskDescription}
            />
            <CalendarPicker />
            <FlexContainer height={'20%'}>
              <ButtonUpdateTask bgColor={colors.green} title={'Create Task'} onPress={handleSaveTask}/>
            </FlexContainer>
          </FlexContainer>
        </MainBody>
        </>
    </Layout>
  )
}

export default NewTaskScreen;