import { createSlice } from "@reduxjs/toolkit";

const brandSlice = createSlice({
  name: "brand",
  initialState: [],
  reducers: {
    addBrand: (state, action) => {
      const newItem = action.payload;
      state.push(newItem);
    },
    initData: (state, action) => {
      const dataList = action.payload;
      return [...dataList];
    },
  },
});

export const getBrandListThunk = () => {
  return async (dispatch) => {
    //Async calls to get list data
    const data = await fetch("www.google.com");

    dispatch(
      brandActions.initData([
        { brandId: 1, brandName: "Brand1", brandImage: "t", brandColor: "Red" },
      ])
    );
  };
};

export const addBrandThunk = (brand) => {
  return async (dispatch) => {
    //Async calls to back end
    await fetch("www.google.com");

    //Dispatching store
    dispatch(brandActions.addBrand(brand));
  };
};

export const brandActions = brandSlice.actions;

export default brandSlice;
