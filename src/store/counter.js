import { createSlice } from "@reduxjs/toolkit";

const initStore = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initStore,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const counterActions = counterSlice.actions;
const counterReducer = counterSlice.reducer;

export { counterActions, counterReducer }