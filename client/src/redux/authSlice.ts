import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  user_id: number;
  username: string;
  email: string;
  role: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authState(state, action: PayloadAction<{ user_id: number; username: string; email: string; role: string }>){
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { authState, logout } = authSlice.actions;
export default authSlice.reducer;
