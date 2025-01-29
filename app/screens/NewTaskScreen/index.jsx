import React, { useState } from 'react'
import Layout from '../Layout';
import { MainBody, DescriptionTitle, NameInput, DescriptionInput } from './styled';
import { FlexContainer } from '../HomeScreen/styled';
import ButtonUpdateTask from '../../components/ButtonUpdateTask';
import { colors } from '../../library/colors';
import Header from '../../components/Header';
import CalendarPicker from '../../components/CalendarPicker';

const NewTaskScreen = () => {
  const [description, setDescription] = useState("");
    
  return (
    <Layout>
        <>
        <Header screenTitle={'Tasks'} headerTitle={'New Task'}/>
        <MainBody>
          <FlexContainer height={'80%'} width={'80%'} align={'flex-start'} justify={'flex-start'}>
            <DescriptionTitle>Task Name</DescriptionTitle>
            <NameInput />
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionInput 
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              value={description}
              onChangeText={setDescription}
            />
            <CalendarPicker />
            <FlexContainer height={'20%'}>
              <ButtonUpdateTask bgColor={colors.green} title={'Create Task'}/>
            </FlexContainer>
          </FlexContainer>
        </MainBody>
        </>
    </Layout>
  )
}

export default NewTaskScreen;