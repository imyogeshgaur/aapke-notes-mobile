import { createSlice, removeListener } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        userId: "",
        userName: "",
        email: "",
        role:""
    },
    reducers: {
        addUserToStore(state, action) {
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.role = action.payload.role
        },

        removeUserFromStore(state, action) {
            state.userId = ""
            state.email = ""
            state.userName = ""
            state.role = ""
        }
    }
})

export default UserSlice.reducer;

export const { addUserToStore, removeUserFromStore } = UserSlice.actions