import { View } from "react-native";

import { InputItem } from "@/components/molecules/input-item";
import { ListItemContainer } from "@/components/molecules/list-item-container";
import { useAppSelector } from "@/core/hooks/use-redux";
import { useItem } from "@/modules/item/hooks/use-item";
import { useToast } from "@/core/hooks/use-toast";

export default function Index() {
  const toast = useToast();
  const { loadingList, addItem, removeItem } = useItem();
  const { list: itemsList } = useAppSelector((state) => state.items);

  const handleAddItem = async (item: string) => {
    await addItem(item);

    toast.show({
      action: "success",
      title: "Item adicionado com sucesso!",
    });
  };

  const handleRemoveItem = async (id: string) => {
    await removeItem(id);

    toast.show({
      action: "success",
      title: "Item removido com sucesso!",
    });
  };

  return (
    <View className="flex-1 bg-white px-3 pt-4">
      <InputItem onAddItem={handleAddItem} />

      <ListItemContainer
        loadingList={loadingList}
        itemsList={itemsList}
        onRemoveItem={handleRemoveItem}
      />
    </View>
  );
}
