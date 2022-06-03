import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";


const store = configureStore({
    reducer: {
        //reducer name : reducer imported
        product: productSlice,
    },
});

export default store;