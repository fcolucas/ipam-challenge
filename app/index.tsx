import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { FlatList, Text, View } from "react-native";

import { Button, ButtonIcon } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { AddIcon, TrashIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { useAppSelector } from "@/core/hooks/use-redux";
import { useItem } from "@/modules/item/hooks/use-item";

const items = [
  {
    id: 1,
    title: "Item 1",
  },
  {
    id: 2,
    title: "Item 2",
  },
  {
    id: 3,
    title: "Item 3",
  },
  {
    id: 4,
    title: "Item 4",
  },
  {
    id: 5,
    title: "Item 5",
  },
];

export default function Index() {
  const { list: itemsList } = useAppSelector((state) => state.items);
  const { loadingList, addItem, removeItem } = useItem();

  return (
    <View className="flex-1 bg-white px-3">
      <Input size="lg">
        <InputField placeholder="Adicione um item..." />

        <InputSlot className="px-2">
          <InputIcon as={AddIcon} className="text-info-500" />
        </InputSlot>
      </Input>

      {loadingList ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={itemsList}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <Divider className="bg-gray-300" />}
          renderItem={({ item }) => (
            <View className="py-4 flex-row flex-1 items-center justify-between">
              <Text>{item.description}</Text>

              <Button action="negative" variant="outline" className="">
                <ButtonIcon as={TrashIcon} />
              </Button>
            </View>
          )}
        />
      )}
    </View>
  );
}
