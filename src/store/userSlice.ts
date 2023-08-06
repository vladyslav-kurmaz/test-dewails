import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userInfo } from "../types/types";
import UserSearchService from "../service/UserSearchServise";

const initialState: userInfo = {
  user: null,
  inputFocus: false,
  inputValue: "",
  loading: false,
  error: false,
};

export const fetchData = createAsyncThunk(
  `worker/fetchWorkers`,
  async (nikname: string) => {
    const { getUser } = UserSearchService();
    return await getUser(nikname);
  }
);

const userInform = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    changeFocus: (state, action) => {
      state.inputFocus = action.payload;
    },
    changeInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    userClose: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = userInform;

export default reducer;
export const { 
  changeFocus, 
  changeInputValue, 
  userClose } = actions;
