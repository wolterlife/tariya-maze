import {createSlice} from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    isPopUpProfileVisible: false,
    cart: [{}],
  },
  reducers: {
    setPopUpProfileVisible(state, action) {
      state.isPopUpProfileVisible = action.payload;
    },
    pushToCart(state, action) {
      state.cart.push(action.payload)
    },
    dellFromCart(state, action) {
      let idx = state.cart.findIndex(x => x.name === action.payload.name)
      state.cart.splice(idx, 1);
    },
  }
})

export const {setPopUpProfileVisible, pushToCart, dellFromCart} = commonSlice.actions
export default commonSlice.reducer;
