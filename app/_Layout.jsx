import { Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>       
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="screens/NewTaskScreen/index" options={{ title: 'New Task'}} />
    </Stack>
  )
}

export default RootLayout