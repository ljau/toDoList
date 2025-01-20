import React, { useState } from 'react'
import Layout from '../Layout';
import { MainHeader, MainBody, TaskTitle, DescriptionTitle, NameInput, DescriptionInput } from './styled';
import { FlexContainer } from '../HomeScreen/styled';
import ButtonUpdateTask from '../../components/ButtonUpdateTask';
import { colors } from '../../library/colors';

const NewTaskScreen = () => {
  const [description, setDescription] = useState("");
    
  return (
    <Layout children={
        <>
        <MainHeader>
          <FlexContainer justify={'center'}>
            <FlexContainer height={'50%'}>
              
            <TaskTitle>Tasks</TaskTitle>
            </FlexContainer>
            <FlexContainer height={'50%'} width={'80%'} align={'flex-start'}>

            <TaskTitle>New Task</TaskTitle>
            </FlexContainer>
          </FlexContainer>
        </MainHeader>
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
            <FlexContainer height={'40%'}>
              <ButtonUpdateTask bgColor={colors.green} title={'Create Task'}/>
            </FlexContainer>
          </FlexContainer>
        </MainBody>
        </>
    }/>
  )
}

export default NewTaskScreen;