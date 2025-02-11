import AsyncStorage from "@react-native-async-storage/async-storage";

// Save data in AsyncStorage
const saveData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    console.log(`${key} saved successfully`);
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

// Export the functions for use in other parts of the app
export { saveCategory, getCategories, saveTask, getTasks };
