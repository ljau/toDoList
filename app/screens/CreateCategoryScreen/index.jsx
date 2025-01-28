import React, { useState } from 'react'
import Layout from '../Layout'
import Header from '../../components/Header'
import { DescriptionInput, DescriptionTitle, MainBody, NameInput } from '../NewTaskScreen/styled'
import { FlexContainer } from '../HomeScreen/styled'
import ButtonUpdateTask from '../../components/ButtonUpdateTask'
import { colors } from '../../library/colors'

const CreateCategoryScreen = () => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  
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
              <ButtonUpdateTask bgColor={colors.green} title={'Save'}/>
            </FlexContainer>
        </FlexContainer>
      </MainBody>
    </Layout>
  )
}

export default CreateCategoryScreen
