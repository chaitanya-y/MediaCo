import { configureStore } from '@reduxjs/toolkit';
import {appReducer} from './reducer/Reducer';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;