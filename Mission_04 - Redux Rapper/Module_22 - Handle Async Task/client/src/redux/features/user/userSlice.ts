import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: null | string;
}

const initialState: IUser = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// export const { } = userSlice.actions;

export default userSlice.reducer;
