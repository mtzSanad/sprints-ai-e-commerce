import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("product/getProducts", async (_,
    thunkAPI) => {
    const { rejecWithValue } = thunkAPI;
    
    try {
        const res = await fetch('https://dummyjson.com/products?limit=10')
        const data = await res.json();
        return data.products;
    } catch (error) {
        return rejecWithValue(error.message);
    };
});

export const getProductCategories = createAsyncThunk("product/getProductCategories", async (_,
    thunkAPI) => {
    const { rejecWithValue } = thunkAPI;
    
    try {
        const res = await fetch(`https://dummyjson.com/products/categories`);
        const data = await res.json();
        return data;
    } catch (error) {
        return rejecWithValue(error.message);
    };
});


const initialState = {
    isLoading: true,
    productsData: [],
    productCategories:[],
    error: null
};

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: builder => {
        //get products
        builder.addCase(getProducts.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.productsData = action.payload;
            state.isLoading = false;
            state.pending = null;
        });
        builder.addCase(getProducts.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        //get products categories
        builder.addCase(getProductCategories.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getProductCategories.fulfilled, (state, action) => {
            state.productCategories = action.payload;
            state.isLoading = false;
            state.pending = null;
        });
        builder.addCase(getProductCategories.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export default productSlice.reducer;