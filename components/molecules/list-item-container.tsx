import { FlatList, ListRenderItem, Text, View } from "react-native";
import { Divider } from "../ui/divider";
import { Button, ButtonIcon } from "../ui/button";
import { TrashIcon } from "../ui/icon";
import { useCallback } from "react";

type ListItemContainerProps = {
  loadingList: boolean;
  itemsList: Item[];
  onRemoveItem: (id: string) => void;
};

export const ListItemContainer = ({
  loadingList,
  itemsList,
  onRemoveItem,
}: ListItemContainerProps) => {
  const renderItem: ListRenderItem<Item> = useCallback(({ item }) => {
    return (
      <View className="py-4 flex-row flex-1 items-center justify-between">
        <Text>{item.description}</Text>

        <Button
          action="negative"
          variant="outline"
          onPress={() => onRemoveItem(item.id)}
        >
          <ButtonIcon as={TrashIcon} />
        </Button>
      </View>
    );
  }, []);

  return (
    <FlatList
      data={itemsList}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<ListEmptyComponent isLoading={loadingList} />}
      ItemSeparatorComponent={() => <Divider className="bg-gray-300" />}
      renderItem={renderItem}
    />
  );
};

const ListEmptyComponent = ({ isLoading }: { isLoading: boolean }) =>
  isLoading ? (
    <View>
      <Text>Carregando...</Text>
    </View>
  ) : (
    <View>
      <Text>Lista vazia</Text>
    </View>
  );
