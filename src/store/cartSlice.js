import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const res = await fetch("https://dummyjson.com/carts");
        const data = await res.json();
        return data.carts[0];
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


const initialState = {
    isLoading: true,
    cartData: [],
    error: null,
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers: builder => {
        //get cart
        builder.addCase(getCart.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cartData = action.payload;
        });
        builder.addCase(getCart.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export default cartSlice.reducer;
