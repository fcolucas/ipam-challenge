import uuid from "react-native-uuid";
import { ItemRepository } from "../repositories/item.repository";

const itemRepository = new ItemRepository();

export const itemService = {
  getItems: async (): Promise<Item[]> => {
    const items = await itemRepository.getList();
    return items;
  },

  saveItem: async (description: string) => {
    const item = { id: uuid.v4(), description };
    await itemRepository.save(item);
  },

  removeItem: async (id: string) => {
    await itemRepository.remove(id);
  },
};
