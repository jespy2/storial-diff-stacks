import { createSlice } from "@reduxjs/toolkit";

import { authThunks } from "../../thunks";
import { IAuthState } from "../../../types";

const { createUser, loginUser } = authThunks;

const initialAuthState: IAuthState = {
  auth: {
    isAuthenticated: false,
    isRegistered: true,
    userInfo: {
      email: '',
      password: '',
      username: ''
    },
  },
  isLoading: false,
  isError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    loginUser: (state, action) => {
      state = {
        auth:
        {
          isAuthenticated: action.payload.success,
          isRegistered: action.payload.success,
          userInfo: {
            email: action.payload.user.email,
            password: action.payload.user.password,
            username: action.payload.user.username
          }
        },
        isLoading: false,
        isError: false,
      }
    },
    logoutUser: (state) => {
      state.auth.isAuthenticated = false;
      state.auth.isRegistered = true;
      state.auth.userInfo = {
        email: '',
        password: '',
        username: ''
      };
      state.isLoading = false;
      state.isError = false;
    },
    createUser: (state, action) => {
      state = {
        auth:
        {
          isAuthenticated: action.payload.success,
          isRegistered: action.payload.success,
          userInfo: {
            email: action.payload.user.email,
            password: action.payload.user.password,
            username: action.payload.user.username
          }
        },
        isLoading: false,
        isError: false,
      }
    },
    userIsRegistered: (state) => { 
      state.auth.isRegistered = true;
    },
    userNotRegistered: (state) => { 
      state.auth.isRegistered = false;
    },
  },
  extraReducers: (builder) => { 
    builder
    // LOGINUSER
    .addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.auth =
        {
          isAuthenticated: action.payload?.response.data.success,
          isRegistered: action.payload?.response.data.success,
          userInfo: {
            email: action.payload ? action.payload?.user.email : '',
            password: action.payload ? action.payload?.user.password : '',
            username: action.payload ? action.payload?.user.username : ''
          }
        }
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.auth.isAuthenticated = false;
      state.auth.isRegistered = false;
    })
      // REGISTERUSER
      .addCase(createUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.auth =
          {
            isAuthenticated: action.payload?.response.data.success,
            isRegistered: action.payload?.response.data.success,
            userInfo: {
              email: action.payload ? action.payload?.user.email : '',
              password: action.payload ? action.payload?.user.password : '',
              username: action.payload ? action.payload?.user.username : ''
            }
          }
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.auth.isAuthenticated = false;
        state.auth.isRegistered = false;
      })
  }
});

export const { reducer: authReducer, actions: authActions } = authSlice;
export const { userIsRegistered, userNotRegistered, logoutUser } = authActions;


    // logoutUser: (state, action) => {
    //   state.isAuthenticated = action.payload.success;
    //   state.userInfo = action.payload.user;
    //   state.isLoading = false;
    //   state.isError = false;
    // },
    // checkUser: (state, action) => {
    //   state.isAuthenticated = action.payload.success;
    //   state.userInfo = action.payload.user;
    //   state.isLoading = false;
    //   state.isError = false;
    // },
    // updateUser: (state, action) => {
    //   state.isAuthenticated = action.payload.success;
    //   state.userInfo = action.payload.user;
    //   state.isLoading = false;
    //   state.isError = false;
    // },
    // deleteUser: (state, action) => {
    //   state.isAuthenticated = action.payload.success;
    //   state.userInfo = action.payload.user;
    //   state.isLoading = false;
    //   state.isError = false;
    // },
    // updatePassword: (state, action) => {
    //   state.isAuthenticated = action.payload.success;
    //   state.userInfo = action.payload.user;
    //   state.isLoading = false;
    //   state.isError = false;
    // },
    // forgotPassword: (state, action) => {
    //   state.isAuthenticated = action.payload.success;
    //   state.userInfo = action.payload.user;
    //   state.isLoading = false;
    //   state.isError = false;
    // },
    // resetPassword: (state, action) => {
    //   state.isAuthenticated = action.payload.success;
    //   state.userInfo = action.payload.user;
    //   state.isLoading = false;
    //   state.isError = false;
    // }