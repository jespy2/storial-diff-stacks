import { createAsyncThunk } from "@reduxjs/toolkit";
import apis from "../../../api";
import { IUser } from "../../../types";

export const authThunks = {
  createUser: createAsyncThunk(
    "auth/createUser",
    async (user: IUser, { rejectWithValue }) => {
      console.log(user)
      try {
        const response = await apis.createUser(user);
        const data = {
          response: response,
          user: user,
        }
        console.log(data)
        return data;
      } catch (err) {
        if (err instanceof Error) {
          rejectWithValue(err.message)
        } else {
          rejectWithValue('An unexpected error occured')
        }
      }
    }
  ),

  loginUser: createAsyncThunk(
    "auth/loginUser",
    async (user: IUser, { rejectWithValue }) => {
      try {
        const response = await apis.loginUser(user);
        const data = {
          response: response,
          user: user,
        }
        return data;
      } catch (err) {
        if (err instanceof Error) {
          rejectWithValue(err.message)
        } else {
          rejectWithValue('An unexpected error occured')
        }
      }
    }
  ),
};