import AsyncStorage from "@react-native-async-storage/async-storage";

export class ItemRepository {
  async save(item: Item): Promise<void> {
    const list = await this.getList();
    list.push(item);

    await AsyncStorage.setItem("items", JSON.stringify(list));
  }

  async getList(): Promise<Item[]> {
    const list = await AsyncStorage.getItem("items");
    return list ? JSON.parse(list) : [];
  }

  async remove(id: string): Promise<void> {
    const list = await this.getList();
    const filteredList = list.filter((item) => item.id !== id);
    await AsyncStorage.setItem("items", JSON.stringify(filteredList));
  }
}
