import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TodoState = {
  todos: Array<TodoType>;
};

type ToggleTodoType = {
  id: number;
  isCompletd: boolean;
};

// * Init state
const initialState: TodoState = {
  todos: [],
};

// * Create Slice
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos = [action.payload, ...state.todos];
    },
    toggleTodo: (state, action: PayloadAction<ToggleTodoType>) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.todos[index].completed = action.payload.isCompletd;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;