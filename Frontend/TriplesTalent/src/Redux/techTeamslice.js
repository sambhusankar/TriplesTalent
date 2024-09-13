import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    value: {}
};

export const techTeamSlice = createSlice({
    name: 'techTeamSlice',
    initialState,
    reducers: {
        getTechteamWork: (state, action) => {
            state.value = { ...state.value, [action.payload.proj]: action.payload };
        }
    }
}); 

export const { getTechteamWork } = techTeamSlice.actions;

// Persist configuration
const persistConfig = {
    key: 'techTeamSlice',
    storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, techTeamSlice.reducer);

export default persistedReducer;
