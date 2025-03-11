import { createStore } from "redux";

const initStore = {
    counter: 0,
    showCounter: true
}

function counterReducer(state = initStore, action) {
    const newState = { ...state };
    switch (action.type) {
        case "increment":
            if (action.payload) {
                newState.counter = state.counter + action.payload
            } else {
                newState.counter = state.counter + 1

            }
            break;
        case "decrement":
            newState.counter = state.counter - 1
            break;
        case "toggle":
            newState.showCounter = !state.showCounter
            break;
        default:
            break;
    }

    return newState;
}


const store = createStore(counterReducer);

// function counterSub() {
//     const state = store.getState();
//     console.log(state)
// }

// store.subscribe(counterSub);


// store.dispatch({
//     type: "add"
// })

export { store }