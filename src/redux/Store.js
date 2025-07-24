import {configureStore} from '@reduxjs/toolkit';
import savedReducer from './slice/SavedSlice';

const store = configureStore({
  reducer: {
    saved: savedReducer,
  },
});

export default store;