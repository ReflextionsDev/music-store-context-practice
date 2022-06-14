import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    favorites: [],
}

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log('PAYLOAD:', action.payload)
            state = (action.payload)
        }
    }
})

export const { login } = UserSlice.actions
export default UserSlice.reducer