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
    showCart: true
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
            },
        }
    }
)

const cartActions = cartStoreSlice.actions;
const cartReducer = cartStoreSlice.reducer;

const store = configureStore({
    reducer: {
        carts: cartReducer
    }
})

export { cartActions, store }