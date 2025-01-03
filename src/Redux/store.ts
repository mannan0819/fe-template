// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './feature/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

// Infer types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;