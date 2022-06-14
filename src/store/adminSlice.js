import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAdminData = createAsyncThunk("admin/getData", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const res = await fetch('https://dummyjson.com/users/1');
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


const initialState = {
    isLoading: true,
    adminData: [],
    error: null,
};


const adminSlice = createSlice({
    name: "admin",
    initialState,
    extraReducers: builder => {
        //get cart
        builder.addCase(getAdminData.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getAdminData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.adminData = action.payload;
        });
        builder.addCase(getAdminData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export default adminSlice.reducer;
