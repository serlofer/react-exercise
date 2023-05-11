import { createSlice } from "@reduxjs/toolkit";

const initialButtonState = { isDisabled: true };

const buttonSlice = createSlice({
  name: "searchButton",
  initialState: initialButtonState,
  reducers: {
    checkToActivate(state, action) {
        state.isDisabled = !action.payload;    
    },
  },
});

export const buttonActions = buttonSlice.actions;
export default buttonSlice.reducer;
