import AsyncStorage from "@react-native-async-storage/async-storage";
import { getTasks } from "../library/storage";

describe("getTasks", () => {
  beforeEach(async () => {
    await AsyncStorage.clear(); // Reset AsyncStorage before each test
  });

  it("should return an empty array if no tasks are stored", async () => {
    const result = await getTasks();
    expect(result).toEqual([]); // Expect empty array when no tasks are stored
  });

  it("should return a list of stored tasks", async () => {
    const mockTasks = [
      {
        id: "1",
        title: "Task 1",
        description: "Description 1",
        date: "2025-02-14",
      },
      {
        id: "2",
        title: "Task 2",
        description: "Description 2",
        date: "2025-02-15",
      },
    ];

    await AsyncStorage.setItem("tasks", JSON.stringify(mockTasks)); // Store mock tasks

    const result = await getTasks();

    expect(result).toEqual(mockTasks); // Expect stored tasks to be retrieved correctly
  });

  it("should return an empty array if tasks retrieval fails", async () => {
    // Mock AsyncStorage.getItem to simulate an error
    jest
      .spyOn(AsyncStorage, "getItem")
      .mockRejectedValueOnce(new Error("AsyncStorage Error"));

    const result = await getTasks();

    expect(result).toEqual([]); // Expect an empty array on failure
  });
});
