import { useAppDispatch } from "@/core/hooks/use-redux";
import { itemService } from "../services/item.service";
import { loadList } from "@/core/stores/reducers/item.reducer";
import { useEffect, useState } from "react";

/**
 * Hook para gerenciar as ações relacionadas aos items
 */
export const useItem = () => {
  const [loadingList, setLoadingList] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoadingList(true);
    loadListItems().finally(() => setLoadingList(false));
  }, []);

  /**
   * Função para carregar a lista de items
   */
  const loadListItems = async (): Promise<void> => {
    dispatch(loadList(await itemService.getItems()));
  };

  /**
   * Função para adicionar um item na lista
   * @param item
   * @returns
   */
  const addItem = async (item: string): Promise<void> => {
    await itemService.saveItem(item).then(loadListItems);
  };

  /**
   * Função para remover um item da lista
   * @param id id do item
   * @returns
   */
  const removeItem = async (id: string): Promise<void> => {
    await itemService.removeItem(id).then(loadListItems);
  };

  return { loadingList, addItem, removeItem };
};
