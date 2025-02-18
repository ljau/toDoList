import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Layout from "../Layout";
import Header from "../../components/Header";
import { DescriptionInput, DescriptionTitle, MainBody, NameInput } from "../NewTaskScreen/styled";
import { colors } from "../../library/colors";
import { FlexContainer } from "../HomeScreen/styled";
import CalendarPicker from "../../components/CalendarPicker";
import ButtonUpdateTask from "../../components/ButtonUpdateTask";
import { getTasks, saveTask } from "../../library/storage";  // make sure saveTask is available

const EditTaskScreen = () => {
  const router = useRouter();
  const { taskId } = useLocalSearchParams();
  
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

// Fetch task data on screen load
useEffect(() => {
  const loadTask = async () => {
    try {
      const tasks = await getTasks();
      const task = tasks.find((t) => t.id === parseInt(taskId));

      if (task) {
        setTaskName(task.title);
        setTaskDescription(task.description);
        setSelectedDate(new Date(task.date)); // Set the selected date correctly
        setSelectedTime(new Date(task.time)); // Ensure selectedTime is properly set as a Date
        console.log('task: ', task);
      } else {
        Alert.alert("Error", "Task not found.");
        router.push("/");
      }
    } catch (error) {
      console.error("Error loading task:", error);
    }
  };

  
  if (taskId) {
    loadTask();
  }
}, [taskId]);


  // Handle saving the updated task
  const handleSaveTask = async () => {

  };

  // Handle deleting the task
  const handleDeleteTask = async () => {

  };

  return (
    <Layout>
      <Header screenTitle="Tasks" headerTitle="Edit Task" />
      <MainBody>
        <FlexContainer height="80%" width="80%" align="flex-start" justify="flex-end">
          <DescriptionTitle>Task Name</DescriptionTitle>
          <NameInput value={taskName} onChangeText={setTaskName} />

          <DescriptionTitle>Description</DescriptionTitle>
          <DescriptionInput
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            value={taskDescription}
            onChangeText={setTaskDescription}
          />

          <CalendarPicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime} 
            setSelectedTime={setSelectedTime}
          />

          <FlexContainer height="20%" justify="space-around">
            <ButtonUpdateTask bgColor={colors.green} title="Save Task" onPress={handleSaveTask} />
            <ButtonUpdateTask bgColor={colors.red} title="Delete Task" onPress={handleDeleteTask} />
          </FlexContainer>
        </FlexContainer>
      </MainBody>
    </Layout>
  );
};

export default EditTaskScreen;
