import { createStore } from 'redux';

function counterReducer(state = {
    counter: 0
}, action) {
    console.log("counterReducer action----", action, state)
    const newState = { ...state };
    switch (action.type) {
        case 'increment':
            console.log('--------', state)
            newState.counter = state.counter + 1;
            break;
        default:
    }
    return newState;
}

const store = createStore(counterReducer)

console.log("init state--", store.getState())
function counterSub() {
    const state = store.getState();
    console.log('counterSub---', state)
}

store.subscribe(counterSub);

store.dispatch(
    {
        type: 'increment'
    }
);
