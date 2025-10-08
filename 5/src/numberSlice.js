import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "number",
  initialState: { value: 0 },
  reducers: {
    increase: (state) => { state.value += 1; },
    decrease: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
  },
});

export const { increase, decrease, reset } = numberSlice.actions;
export default numberSlice.reducer;
