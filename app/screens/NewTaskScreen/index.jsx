import React from 'react'
import Layout from '../Layout';
import { MainHeader, MainBody } from './styled';
import { Title } from '../HomeScreen/styled';

const NewTaskScreen = () => {
    
  return (
    <Layout children={
        <>
        <MainHeader>
            <Title>Welcome!</Title>
        </MainHeader>
        <MainBody>

        </MainBody>
        </>
    }/>
  )
}

export default NewTaskScreen;