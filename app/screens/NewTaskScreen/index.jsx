import React, { useEffect, useState } from 'react'
import Layout from '../Layout';
import { MainBody, DescriptionTitle, NameInput, DescriptionInput, PickerContainer } from './styled';
import { FlexContainer } from '../HomeScreen/styled';
import ButtonUpdateTask from '../../components/ButtonUpdateTask';
import { colors } from '../../library/colors';
import Header from '../../components/Header';
import CalendarPicker from '../../components/CalendarPicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { getCategories, getTasks, saveTask } from '../../library/storage';
import { Picker } from '@react-native-picker/picker';
import { Text, View } from 'react-native';

const NewTaskScreen = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskname, setTaskname] = useState("");
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesFromStorage = await getCategories(); // Use your fetch function
        setCategories(categoriesFromStorage); // Set categories to state
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    loadCategories();
  }, []); // Empty array ensures the effect runs once after the initial render


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
            categoryId: selectedCategory, // Ensure the task is linked to a category
          };
    
          // Save task to storage
          await saveTask(newTask);
    
          // Update and persist the last used task ID
          await AsyncStorage.setItem('lastTaskId', newTaskId.toString());
    
          // Fetch updated tasks list
          const tasks = await getTasks();
          router.push('/');
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
    <PickerContainer>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={{ height: 50, width: '100%' }}
        >
        <Picker.Item label="Select Category" value={null} enabled={false} />
        {categories.map((category) => (
          <Picker.Item
            key={category.id} // Use a unique identifier for each category
            label={category.name}
            value={category.id}
          />
        ))}
      </Picker>
    </PickerContainer>

            <CalendarPicker />
            <FlexContainer height={'10%'}>
              <ButtonUpdateTask bgColor={colors.green} title={'Create Task'} onPress={handleSaveTask}/>
            </FlexContainer>
          </FlexContainer>
        </MainBody>
        </>
    </Layout>
  )
}

export default NewTaskScreen;