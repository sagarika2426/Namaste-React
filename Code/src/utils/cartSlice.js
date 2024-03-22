import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: "cart",
    initialState: {
        items: [] //right now the cart is empty in the initial state

    },
    reducers: {
        //Actions
        //we are modifying the states directly - mutating the states
        addItem:(state, action) =>{//reducer fn
            state.items.push(action.payload)
        },
        removeItem:(state) => {
            state.items.pop() // remove the item from the last
        },
        clearCart: (state) => {
            state.items.length = 0; //[] empty array
        }
        
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer

