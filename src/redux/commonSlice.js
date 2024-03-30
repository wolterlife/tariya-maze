import {createSlice} from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    isPopUpProfileVisible: false,
    isAuth: false,
  },
  reducers: {
    setPopUpProfileVisible(state, action) {
      state.isPopUpProfileVisible = action.payload;
    },
  }
})

export const {setPopUpProfileVisible} = commonSlice.actions
export default commonSlice.reducer;
