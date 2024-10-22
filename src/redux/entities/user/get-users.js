import { createAsyncThunk } from "@reduxjs/toolkit"

const getUsers = createAsyncThunk(
    `user/getUsers`,
    async (_, { rejectWithValue, fulfillWithValue }) => {
        const response = await fetch("http://localhost:3001/api/users")
        const result = await response.json()

        if (!result.length) {
            rejectWithValue("empty result")
        }

        return fulfillWithValue(result)
    },
    
)

const getUserById = createAsyncThunk(
    `users/getUserById`,
    async (userId, {rejectWithValue, fulfillWithValue}) => {
        const response = await fetch(`http://localhost:3001/api/user/${userId}`)
        const result = await response.json()

        if (!result.length) {
            rejectWithValue("empty result")
        }

        return fulfillWithValue(result)
    }
)

export {
    getUsers,
    getUserById,
}