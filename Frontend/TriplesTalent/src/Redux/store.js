import { configureStore } from '@reduxjs/toolkit'
import loginUser from './userSlice'
import user from './logedUserSlice'
export const Store = configureStore({
    reducer:{
        login_user : loginUser,
        loged_user: user,
    }
})