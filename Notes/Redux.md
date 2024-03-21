Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build store
- Connect the store to the app
- create cart slice to add item to cart
- dispatch(action) which will create a fn which is called Reducer
- Read the data using selector


import {configureStore} from "@reduxjs/toolkit"
when you want to build the store you need configureStore. To configure redux is going to help so it is imported from redux toolkit

import { Provider } from "react-redux";
You need to provide the store in the app.js. It is imported from react-redux as it is making a bridge between react and redux



Reading Items from the store:
in header subscribe to the store using selectore  
    const cartItems = useSelector((store) => store.cart.items);

    add cartItems in the cart using normal jsx
    



//Subscribing to the store - v.v.v.v.. impppp
const cartItems = useSelector((store) => store.cart.items)
or 
const store = useSelector((store) => store)
const cartItems = store.cart.item

in case 1, we are subcribing to the specific part of the store and in case 2 we are subcribing the whole store and then accessing the item so even if any other slice will get updated in the store, it will also get affected, this will decrease the efficiency a lot.


//reducer vs reducers
when you are writing inside the store you are writeing reducer as it is a big reducer which can contain multiple small reducers 
but in slice its reducers as there are multiiple small fns  
