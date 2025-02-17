// taskHooks.js

import { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveTask, getTasks } from "../storage";

export const useTask = (
  taskname,
  taskDescription,
  selectedCategory,
  selectedDate,
  selectedTime,
  router
) => {
  const handleSaveTask = async () => {
    // Check if task fields are empty
    if (!taskname.trim() || !taskDescription.trim() || !selectedCategory) {
      Alert.alert(
        "Error",
        "Please fill in all fields (Title, Description, and Category)."
      );
      return; // Prevent saving the task
    }

    try {
      // Retrieve the last used task ID from AsyncStorage
      const lastTaskId = await AsyncStorage.getItem("lastTaskId");
      const newTaskId = lastTaskId ? parseInt(lastTaskId) + 1 : 1;

      // Create new task with a consecutive ID
      const newTask = {
        id: newTaskId,
        title: taskname,
        description: taskDescription,
        date: selectedDate.toISOString(),
        time: selectedTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        categoryId: selectedCategory, // Ensure the task is linked to a category
      };

      // Save task to storage
      await saveTask(newTask);
      Alert.alert("Success", "Task saved successfully!");

      // Update and persist the last used task ID
      await AsyncStorage.setItem("lastTaskId", newTaskId.toString());

      // Fetch updated tasks list
      const tasks = await getTasks();

      // Redirect to home page
      router.push("/");
    } catch (error) {
      Alert.alert(
        "Error",
        "There was an issue saving the task. Please try again."
      );
    }
  };

  return { handleSaveTask };
};
