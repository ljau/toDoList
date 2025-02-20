import AsyncStorage from "@react-native-async-storage/async-storage";

// Save data in AsyncStorage
const saveData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${key}:`, error);
  }
};

// Get data from AsyncStorage
const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data != null ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error retrieving ${key}:`, error);
    return [];
  }
};

// Save a new category
const saveCategory = async (category) => {
  const categories = await getData("categories");
  categories.push(category);
  await saveData("categories", categories);
};

// Get all categories
const getCategories = async () => {
  return await getData("categories");
};

// Save a new task
const saveTask = async (task) => {
  const tasks = await getData("tasks");
  tasks.push(task);
  await saveData("tasks", tasks);
};

// Get all tasks
const getTasks = async () => {
  return await getData("tasks");
};

// Retrieve tasks for a specific category
const getTasksByCategory = async (categoryId) => {
  try {
    const tasks = await getTasks();
    return tasks.filter((task) => task.categoryId === categoryId);
  } catch (error) {
    console.error("Error filtering tasks by category:", error);
    return [];
  }
};

// Retrieve tasks for today
const getTodayTasks = async () => {
  try {
    // Get all tasks from AsyncStorage
    const tasks = await getTasks();

    // Get today's date in local time
    const today = new Date();
    const todayStart = new Date(today.setHours(0, 0, 0, 0)); // Today's date with time set to 00:00
    const todayEnd = new Date(today.setHours(23, 59, 59, 999)); // Today's date with time set to 23:59:59

    // Filter tasks that match today's date
    const todayTasks = tasks.filter((task) => {
      const taskDate = new Date(task.date); // Convert the stored task date to Date object
      return taskDate >= todayStart && taskDate <= todayEnd;
    });

    return todayTasks;
  } catch (error) {
    console.error("Error retrieving today's tasks:", error);
    return [];
  }
};

// Export the functions for use in other parts of the app
export {
  saveData,
  saveCategory,
  getCategories,
  saveTask,
  getTasks,
  getTasksByCategory,
  getTodayTasks,
};
