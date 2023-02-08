import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as userService from "../../../services/user.service";
export const dispatchDeleteUser = createAsyncThunk(
  "user/dispatchDeleteUser",
  async (values) => {
    const response = await userService.deleteUser(values);
    return response.data;
  }
);

const initialState = {
  isLoading: false,
  isError: false,
  message: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.message = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [dispatchDeleteUser.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.message = "";
    },
    [dispatchDeleteUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "missing information";
    },
    [dispatchDeleteUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "user Deleted!";
    },
  },
});

export const { clearErrorMessage } = userSlice.actions;
export default userSlice.reducer;
