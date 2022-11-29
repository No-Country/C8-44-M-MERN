import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../models";
import { userService } from "../../../services";

export const getUser = createAsyncThunk("user/me", async () => {
  return await userService.getData();
});

export const registerUser = createAsyncThunk(
  "user/register",
  async (user: User, thunkAPI) => {
    try {
      return await userService.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to register");
    }
  }
);
