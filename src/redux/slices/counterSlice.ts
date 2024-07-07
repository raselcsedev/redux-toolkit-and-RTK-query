/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
    value : number;
}

// Initial state 
const initialState: CounterState = {
    value: 0
}

// create slice 
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers : {
        increment: (state) => {
            state.value++;
          },
          decrement: (state) => {
            state.value--;
          },
          customIncrement: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
          },
    }
})
export const { increment, decrement, customIncrement  } = counterSlice.actions;
export default counterSlice.reducer