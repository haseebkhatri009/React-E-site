import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light", // Default mode light rakho
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"; // Toggle light/dark
    },
  },
});

export const { toggleMode } = modeSlice.actions; // Action export karo
export default modeSlice.reducer; // Reducer export karo
