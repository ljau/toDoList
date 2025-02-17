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
import { Alert } from 'react-native';

const NewTaskScreen = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskname, setTaskname] = useState("");
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

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
    // Check if task fields are empty
    if (!taskname.trim() || !taskDescription.trim() || !selectedCategory) {
      Alert.alert("Please fill in all fields (Title, Description, and Category).");
      return; // Prevent saving the task
    }
  
    try {
      // Retrieve the last used task ID from AsyncStorage
      const lastTaskId = await AsyncStorage.getItem('lastTaskId');
      const newTaskId = lastTaskId ? parseInt(lastTaskId) + 1 : 1;
  
      // Create new task with a consecutive ID
      const newTask = {
        id: newTaskId,
        title: taskname,
        description: taskDescription,
        date: selectedDate.toISOString(),
        time: selectedTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        categoryId: selectedCategory, // Ensure the task is linked to a category
      };
  
      // Save task to storage
      await saveTask(newTask);
      Alert.alert("Success", "Task saved successfully!");
  
      // Update and persist the last used task ID
      await AsyncStorage.setItem('lastTaskId', newTaskId.toString());
  
      // Fetch updated tasks list
      const tasks = await getTasks();
  
      // Redirect to home page
      router.push('/');
    } catch (error) {
      Alert.alert("Error", "There was an issue saving the task. Please try again.");
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
            <CalendarPicker 
              selectedDate={selectedDate} 
              setSelectedDate={setSelectedDate} 
              selectedTime={selectedTime} 
              setSelectedTime={setSelectedTime} 
            />
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