import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCategories } from "../library/storage";

describe("getCategories", () => {
  beforeEach(async () => {
    await AsyncStorage.clear(); // Reset AsyncStorage before each test
  });

  it("should return an empty array if no categories are stored", async () => {
    const result = await getCategories();
    expect(result).toEqual([]);
  });

  it("should return a list of stored categories", async () => {
    const mockCategories = [
      { id: "1", name: "Work" },
      { id: "2", name: "Personal" },
    ];

    await AsyncStorage.setItem("categories", JSON.stringify(mockCategories));

    const result = await getCategories();

    expect(result).toEqual(mockCategories);
  });
});
