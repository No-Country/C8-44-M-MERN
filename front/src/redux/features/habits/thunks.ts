import { createAsyncThunk } from "@reduxjs/toolkit";
import { habitsService } from "../../../services";

export const habits = createAsyncThunk("habits", async () => {
  return await habitsService;
});
