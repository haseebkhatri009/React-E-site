import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './modeSlice'; // Ye hum agle step mein banayenge

const store = configureStore({
  reducer: {
    mode: modeReducer, // modeSlice ka reducer yahan register karenge
  },
});

export default store;
