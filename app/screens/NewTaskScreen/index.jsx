import React, { useState } from 'react'
import Layout from '../Layout';
import { MainHeader, MainBody, TaskTitle, DescriptionTitle, NameInput, DescriptionInput } from './styled';
import { FlexContainer } from '../HomeScreen/styled';
import ButtonUpdateTask from '../../components/ButtonUpdateTask';
import { colors } from '../../library/colors';
import Header from '../../components/Header';
import MenuModal from '../../components/MenuModal';

const NewTaskScreen = () => {
  const [description, setDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
    
  return (
    <Layout>
        <>
        <Header onMenuPress={() => setModalVisible(true)}/>
        <MenuModal 
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
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
    </Layout>
  )
}

export default NewTaskScreen;