import { createSlice } from "@reduxjs/toolkit";
import UsersData from "../assets/UsersData.json";

export const usersSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id != action.payload);
    },
    updateUser: (state, action) => {
      console.log(action.payload);
      state.value = state.value.map((user) => {
        if (user.id == action.payload.id) {
          user.username = action.payload.newUsername;
        }
        return user;
      });
    },
  },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
