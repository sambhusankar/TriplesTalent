import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : ''
}
export const logedUser = createSlice({
    name: 'logedUser',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {getUser} = logedUser.actions
export default logedUser.reducer