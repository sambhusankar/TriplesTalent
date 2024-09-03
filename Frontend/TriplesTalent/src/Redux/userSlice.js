import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    value: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUser: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { changeUser } = userSlice.actions;

// Persist configuration
const persistConfig = {
    key: 'user',
    storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export default persistedReducer;
