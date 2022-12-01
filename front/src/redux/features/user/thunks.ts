import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../models";
import { userService } from "../../../services";

export const getUser = createAsyncThunk("user/me", async () => {
  return await userService.getData();
});



