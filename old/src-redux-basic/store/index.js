import { createSlice, configureStore } from "@reduxjs/toolkit";
import { counterReducer, counterActions } from "./counter"


// function counterReducer(state = initStore, action) {
//     const newState = { ...state };
//     switch (action.type) {
//         case "increment":
//             if (action.payload) {
//                 newState.counter = state.counter + action.payload
//             } else {
//                 newState.counter = state.counter + 1

//             }
//             break;
//         case "decrement":
//             newState.counter = state.counter - 1
//             break;
//         case "toggle":
//             newState.showCounter = !state.showCounter
//             break;
//         default:
//             break;
//     }

//     return newState;
// }


// const store = createStore(counterReducer);

const initAuthStore = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auth",
    initialState: initAuthStore,
    reducers: {
        logIn(state) {
            state.isAuthenticated = true;
        },
        logOut(state) {
            state.isAuthenticated = false;
        }
    }
})
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authSlice.reducer
    }
});

// const store = createStore(counterReducer);

const authActions = authSlice.actions;


export { store, counterActions, authActions }