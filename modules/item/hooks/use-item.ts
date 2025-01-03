import { useAppDispatch } from "@/core/hooks/use-redux";
import { itemService } from "../services/item.service";
import { loadList } from "@/core/stores/reducers/item.reducer";
import { useEffect, useState } from "react";

export const useItem = () => {
  const [loadingList, setLoadingList] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoadingList(true);
    loadListItems().finally(() => setLoadingList(false));
  }, []);

  const loadListItems = async (): Promise<void> => {
    dispatch(loadList(await itemService.getItems()));
  };

  const addItem = async (item: string): Promise<void> => {
    await itemService.saveItem(item).then(loadListItems);
  };

  const removeItem = async (id: string): Promise<void> => {
    await itemService.removeItem(id).then(loadListItems);
  };

  return { loadingList, addItem, removeItem };
};
