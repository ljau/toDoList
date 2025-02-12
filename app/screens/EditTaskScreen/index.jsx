import React, { useState } from 'react'
import Layout from '../Layout'
import Header from '../../components/Header'
import { DescriptionInput, DescriptionTitle, MainBody, NameInput } from '../NewTaskScreen/styled'
import { colors } from '../../library/colors'
import { FlexContainer } from '../HomeScreen/styled'
import CalendarPicker from '../../components/CalendarPicker'
import ButtonUpdateTask from '../../components/ButtonUpdateTask'

const EditTaskScreen = () => {
    const [description, setDescription] = useState("");
  return (
    <Layout>
        <Header screenTitle={'Tasks'} headerTitle={'Edit Task'}/>
        <MainBody>
        <FlexContainer height={'80%'} width={'80%'} align={'flex-start'} justify={'flex-end'}>
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
            <FlexContainer height={'20%'} justify={'space-around'}>
              <ButtonUpdateTask bgColor={colors.green} title={'Create Task'}/>
              <ButtonUpdateTask bgColor={colors.red} title={'Delete Task'}/>
            </FlexContainer>
        </FlexContainer>
        </MainBody>
    </Layout>
  )
}

export default EditTaskScreen