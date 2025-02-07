import { Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "fade" }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="screens/NewTaskScreen/index" options={{ title: "New Task" }} />
      <Stack.Screen name="screens/CreateCategoryScreen/index" options={{ title: "Create Category" }} />
      <Stack.Screen name="screens/TasksList/index" options={{ title: "Tasks List" }} />
      <Stack.Screen name="screens/CategoriesList/index" options={{ title: "Categories List" }} />
      <Stack.Screen name="screens/EditTaskScreen/index" options={{ title: "Edit Task" }} />
    </Stack>
  )
}

export default RootLayout