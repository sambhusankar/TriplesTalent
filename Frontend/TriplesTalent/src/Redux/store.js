import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import loginUser from './userSlice';
import user from './logedUserSlice';
import data from './techTeamslice';

// Persist config for redux-persist
const persistConfig = {
    key: 'root',
    storage: sessionStorage, // Stores data per session
};

// Combine reducers
const rootReducer = combineReducers({
    login_user: loginUser,
    loged_user: user,
    techTeamWork: data,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with the persisted reducer and customized middleware
export const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

// Export persistor, which will be used to persist the store
export const persistor = persistStore(Store);
