if (typeof jest !== "undefined") {
  const mockAsyncStorage = require("@react-native-async-storage/async-storage/jest/async-storage-mock");
  jest.mock(
    "@react-native-async-storage/async-storage",
    () => mockAsyncStorage
  );
}
