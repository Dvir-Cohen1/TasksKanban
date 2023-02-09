import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as userService from "../../../services/user.service";


export const dispatchDeleteUser = createAsyncThunk(
  "user/dispatchDeleteUser",
  async (values, { getState }) => {
    const state = getState();
    setTimeout(() => {
      state.message = false;
      state.isError = false;
    }, 6000);
    const response = await userService.deleteUser(values);
    return response;
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
      return setTimeout(() => {
        state.message = false;
        state.isError = false;
      }, 6000);
    },
  },
  extraReducers: {
    [dispatchDeleteUser.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.message = "";
    },
    [dispatchDeleteUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.message = payload.message;
    },
    [dispatchDeleteUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload.error;
      state.message = payload.message;
    },
  },
});

export const { clearErrorMessage } = userSlice.actions;
export default userSlice.reducer;
