import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./reducers/item.reducer";

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootStore = typeof store;

export default store;
