import { useState } from "react";
import { AddIcon } from "../ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "../ui/input";

type InputItemProps = {
  onAddItem: (item: string) => Promise<void>;
};

export const InputItem = ({ onAddItem }: InputItemProps) => {
  const [item, setItem] = useState("");

  const handleAddItem = async () => {
    await onAddItem(item);
    setItem("");
  };

  return (
    <Input size="lg">
      <InputField
        value={item}
        onChangeText={setItem}
        placeholder="Adicione um item..."
      />

      <InputSlot
        className="px-2"
        onPress={handleAddItem}
        disabled={item.length === 0}
      >
        <InputIcon as={AddIcon} className="text-info-500" />
      </InputSlot>
    </Input>
  );
};
