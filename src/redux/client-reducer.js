import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    value: 0,
    clientorder: {},
    orderList: [],
  },
  reducers: {
    orderdata: (state, action) => {
      const order = (state.clientorder = action.payload);
      state.orderList = [...state.orderList, { order }];
      localStorage.setItem("orderlist", state.orderList);
      console.log("this is redducer", state.clientorder);
      console.log("this is orderlist", state.orderList);
    },
    orderstatus: (state, action) => {
      return action.payload;
    },
  },
});

export const { orderstatus, orderdata } = clientSlice.actions;

export default clientSlice.reducer;
