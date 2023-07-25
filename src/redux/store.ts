import { configureStore } from '@reduxjs/toolkit';

import notesReducer from './features/notes/notesSlice';

// creating the store
export const store = configureStore({
  reducer: {
    // adding our notes reducer to main store
    notes: notesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
