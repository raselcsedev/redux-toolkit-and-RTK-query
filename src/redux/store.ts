import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import todoSlice from "./slices/todoSlice";
import { userAPi } from "./services/userService";

export const store = configureStore({
  reducer: {
    [userAPi.reducerPath]: userAPi.reducer,

    counter: counterSlice,
    todos: todoSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;