import { Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="screens/NewTaskScreen" options={{ title: 'New Task', animation: 'slide_from_right', headerShown: true, }} />
    </Stack>
  )
}

export default RootLayout