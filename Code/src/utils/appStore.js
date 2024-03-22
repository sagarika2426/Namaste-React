
import {configureStore} from "@reduxjs/toolkit"
// configureStore will give us the store
import cartReducer from "./cartSlice"

const appStore = configureStore({

    //for each slice we will have reducer
    //this is a big reducer for the app, inside which we can keep multiple reducers for slices
    reducer: {
        cart: cartReducer,
    }

});

export default appStore;