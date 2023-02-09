import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartitem: [],
    iscartOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        toggleCart(state , action){
            state.iscartOpen = action.payload;
        },

        additem(state, action) {
            const newItemId = action.payload.id;
            const existingItem = state.cartitem.find(item => item.id === newItemId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartitem.push(action.payload);
            }
        },

        removeItem(state, action) {
            state.cartitem = state.cartitem.filter(item => item.id !== action.payload);
        },

        incrementItem(state, action) {
            state.cartitem = state.cartitem.map(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item;
            })
        },

        decrementItem(state, action) {
            state.cartitem = state.cartitem.map(item => {
                if (item.id === action.payload) {
                    item.quantity--;
                }
                return item;
            }).filter(item => item.quantity !== 0);
        }
    }
});


export const { toggleCart, additem, removeItem, decrementItem, incrementItem } = cartSlice.actions;
export default cartSlice.reducer;