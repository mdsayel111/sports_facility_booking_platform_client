import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// type TUser
type TUserData = {
    _id: string
    name: string
    email: string
    role: string
    phone: string
    address: string
}
// Define a type for the slice state
interface TAuthState {
    userData: TUserData;
    token: string | null;
}

// Define the initial state using that type
const initialState: TAuthState = {
    userData: {} as TUserData,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setAuth: (state, action) => {
            console.log(action.payload)
            state.userData = action.payload.data
            state.token = action.payload.token
        },
        logout: (state) => {
            state.userData = {} as TUserData
            state.token = null
        }
    },
})

export const { setAuth, logout } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer