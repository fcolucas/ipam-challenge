import { FlatList, Text, View } from "react-native";

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
  return (
    <View className="flex-1">
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="p-4">
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
