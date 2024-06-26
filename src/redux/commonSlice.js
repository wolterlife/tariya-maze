import {createSlice} from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    isPopUpProfileVisible: false,
    cart: [{}],
    search: ''
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
    clearCart(state) {
      state.cart = [{}];
    },
    setSearch(state, action) {
      state.search = action.payload;
    }
  }
})

export const {setPopUpProfileVisible, pushToCart, dellFromCart, clearCart, setSearch} = commonSlice.actions
export default commonSlice.reducer;
