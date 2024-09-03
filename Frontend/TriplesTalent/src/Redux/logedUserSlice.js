import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    user: ''
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload;
        }
    }
}); 

export const { getUser } = userSlice.actions;

// Persist configuration
const persistConfig = {
    key: 'userSlice',
    storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export default persistedReducer;
