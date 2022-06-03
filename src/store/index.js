import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import brandSlice from "./brand-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    brand: brandSlice.reducer,
  },
});

export default store;
