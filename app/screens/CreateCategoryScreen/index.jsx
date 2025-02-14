import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import Header from '../../components/Header'
import { DescriptionInput, DescriptionTitle, MainBody, NameInput } from '../NewTaskScreen/styled'
import { FlexContainer } from '../HomeScreen/styled'
import ButtonUpdateTask from '../../components/ButtonUpdateTask'
import { colors } from '../../library/colors'
import { getCategories, saveCategory } from '../../library/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router'


const CreateCategoryScreen = () => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSaveCategory = async () => {
    if (categoryName.trim()) {
      try {
        // Retrieve the last used ID from AsyncStorage
        const lastId = await AsyncStorage.getItem('lastCategoryId');
        const newId = lastId ? parseInt(lastId) + 1 : 1;
  
        // Create new category with consecutive ID
        const newCategory = { id: newId, name: categoryName, description: description };
  
        // Save category to storage
        await saveCategory(newCategory);
  
        // Update and persist the last used ID
        await AsyncStorage.setItem('lastCategoryId', newId.toString());
  
        // Fetch updated categories list
        const categories = await getCategories();
        router.push('/screens/CategoriesList');

      } catch (error) {
        console.error('Error saving category:', error);
      }
    } else {
      console.error('Category name cannot be empty');
    }
  };

  //Function to clear all the stored data.
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategories();
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Layout>
      <Header screenTitle={'Categories'} headerTitle={'Create Category'}/>
      <MainBody>
        <FlexContainer height={'80%'} width={'80%'} align={'flex-start'} >
          <FlexContainer height={'80%'} justify={'flex-start'} align={'flex-start'}>
            <DescriptionTitle>Category Name</DescriptionTitle>
            <NameInput 
              value={categoryName}
              onChangeText={setCategoryName}
            />
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionInput 
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              value={description}
              onChangeText={setDescription}
            />
          </FlexContainer>
          <FlexContainer height={'20%'}>
            <ButtonUpdateTask 
              bgColor={colors.green} 
              title={'Save'} 
              onPress={handleSaveCategory}
            />
          </FlexContainer>
        </FlexContainer>
      </MainBody>
    </Layout>
  )
}

export default CreateCategoryScreen;
