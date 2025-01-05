import { View } from "react-native";

import { InputItem } from "@/components/molecules/input-item";
import { ListItemContainer } from "@/components/molecules/list-item-container";
import { useAppSelector } from "@/core/hooks/use-redux";
import { useItem } from "@/modules/item/hooks/use-item";

export default function Index() {
  const { loadingList, addItem, removeItem } = useItem();
  const { list: itemsList } = useAppSelector((state) => state.items);

  return (
    <View className="flex-1 bg-white px-3 pt-4">
      <InputItem onAddItem={addItem} />

      <ListItemContainer
        loadingList={loadingList}
        itemsList={itemsList}
        onRemoveItem={removeItem}
      />
    </View>
  );
}
