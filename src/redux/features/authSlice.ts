import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuth: boolean;
  username: string;
  uuid: string;
  isModerator: boolean;
};

type initialStateType = {
  value: AuthState;
};
const initialState = {
  value: {
    isAuth: false,
    username: "",
    uuid: "",
    isModerator: false,
  } as AuthState,
} as initialStateType;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uuid: "uiaubeiubgairbgf",
          isModerator: false,
        },
      };
    },
    toggleModerator: (state) => {
      state.value.isModerator = !state.value.isModerator;
    },
  },
});

export const { logIn, logOut, toggleModerator } = auth.actions;
export default auth.reducer;
