import { configureStore, createSlice } from "@reduxjs/toolkit";


/**
 * @typedef {object} CartItem
 * @property {string} id - The ID of the item.
 */

/**
 * @typedef {object} InitCartsState
 * @property {Array<CartItem>} carts - The array of carts.
 * @property {number} length - The length of the carts array.
 */
const initCartsState = {
    carts: [],
    showCart: true,
}

const cartStoreSlice = createSlice(
    {
        name: 'carts',
        initialState: initCartsState,
        reducers: {
            addCard(state, action) {
                const item = state.carts.find(item => item.id === action.payload.id);
                if (item) {
                    item.qty += 1;
                } else {
                    // @ts-ignore
                    state.carts.push({
                        ...action.payload,
                        qty: 1
                    })
                }
            },
            addQTY(state, action) {
                const item = state.carts.find(item => item.id === action.payload);
                if (item) {
                    item.qty += 1;
                }
            },
            decrementQTY(state, action) {
                const item = state.carts.find(item => item.id === action.payload);
                if (item?.qty === 1) {
                    const index = state.carts.findIndex(item => item.id === action.payload);
                    state.carts.splice(index, 1);
                } else {
                    item.qty -= 1;
                }
            },
            showCart(state) {
                console.log('showCart')
                state.showCart = !state.showCart
            }
        }
    }
)

const initUIState = {
    notification: null
}

const uiStoreSlice = createSlice(
    {
        name: 'ui',
        initialState: initUIState,
        reducers: {
            showNotification(state, action) {
                // @ts-ignore
                state.notification = {
                    status: action.payload.status,
                    title: action.payload.title,
                    message: action.payload.message,
                }
            }
        }
    }
)


const cartActions = cartStoreSlice.actions;
const cartReducer = cartStoreSlice.reducer;

const uiActions = uiStoreSlice.actions;
const uiReducer = uiStoreSlice.reducer;

const store = configureStore({
    reducer: {
        carts: cartReducer,
        ui: uiReducer
    }
})

export { cartActions, store, uiActions }