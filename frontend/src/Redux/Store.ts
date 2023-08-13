import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import UserSlice from "./slice/UserSlice";

const store = configureStore({
    reducer: {
        user:UserSlice,
        form:formReducer
    },
})

export default store;