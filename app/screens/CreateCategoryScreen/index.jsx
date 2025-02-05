import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import Header from '../../components/Header'
import { DescriptionInput, DescriptionTitle, MainBody, NameInput } from '../NewTaskScreen/styled'
import { FlexContainer } from '../HomeScreen/styled'
import ButtonUpdateTask from '../../components/ButtonUpdateTask'
import { colors } from '../../library/colors'
import { getCategories, saveCategory } from '../../library/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateCategoryScreen = () => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const handleSaveCategory = async () => {
    if (categoryName.trim()) {
      try {
        const newCategory = { id: Date.now(), name: categoryName, description: description };
        await saveCategory(newCategory);
        console.log('Category saved:', newCategory);

        // Optionally, you can fetch categories again to update the UI
        const categories = await getCategories();
        console.log('Categories:', categories);
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
      console.log('Storage has been cleared!');
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategories();
        console.log('Categories:', categories);
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
