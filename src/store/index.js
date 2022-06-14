import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";


const store = configureStore({
    reducer: {
        //reducer name : reducer imported
        product: productSlice,
        cart: cartSlice,
        admin:adminSlice
    },
});

export default store;