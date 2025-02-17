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
import { useTask } from '../../library/hooks/taskHooks';

const NewTaskScreen = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskname, setTaskname] = useState("");
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { handleSaveTask } = useTask(taskname, taskDescription, selectedCategory, selectedDate, selectedTime, router);
  
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesFromStorage = await getCategories(); // Use fetch function
        setCategories(categoriesFromStorage); // Set categories to state
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    loadCategories();
  }, []); // Empty array ensures the effect runs once after the initial render
    
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