import { configureStore } from "@reduxjs/toolkit";
import cartReducer from'./cartslice'

const store = configureStore({
    reducer:{
       cartReducer
    }
})
export default store;