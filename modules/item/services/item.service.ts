import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

const getAsyncItemList = async (): Promise<Item[]> => {
  const list = await AsyncStorage.getItem("items");
  return JSON.parse(list || "[]");
};

export const itemService = {
  getItems: async (): Promise<Item[]> => {
    const items = await getAsyncItemList();
    return items;
  },

  saveItem: async (description: string) => {
    const items = await getAsyncItemList();
    const item = { id: uuid.v4(), description };
    items.push(item);
    await AsyncStorage.setItem("items", JSON.stringify(items));
  },

  removeItem: async (id: string) => {
    const items = await getAsyncItemList();
    const filteredItems = items.filter((item) => item.id !== id);
    await AsyncStorage.setItem("items", JSON.stringify(filteredItems));
  },
};
