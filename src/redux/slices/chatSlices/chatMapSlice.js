// chatMapSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputText: "",
  inputGroupText: "",
  address: "",
  createMarker: 0,
  selectedTheme: "",
};

export const chatMapSlice = createSlice({
  name: "chatMap",
  initialState,
  reducers: {
    setInputText: (state, action) => {
      state.inputText = action.payload;
    },
    setInputGroupText: (state, action) => {
      state.inputGroupText = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    incrementCountAddMarker: (state) => {
      state.createMarker += 1;
    },
    setSelectedTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const {
  setInputText,
  setInputGroupText,
  setAddress,
  incrementCountAddMarker,
  setSelectedTheme,
} = chatMapSlice.actions;

export default chatMapSlice.reducer;
