import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ItemState = {
  list: Item[];
};

const initialState: ItemState = {
  list: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    loadList: (state, action: PayloadAction<Item[]>) => {
      state.list = action.payload;
    },
  },
});

export const { loadList } = itemsSlice.actions;
export default itemsSlice.reducer;
