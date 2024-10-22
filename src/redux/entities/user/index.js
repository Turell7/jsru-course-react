import { createSlice } from "@reduxjs/toolkit"
import { createEntityAdapter } from "@reduxjs/toolkit"
import { getUserById } from "./get-users"

const entityAdapter = createEntityAdapter()

export const userSlice = createSlice({
    name: "user",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectUserById: (state, id) => state.entities[id],
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) =>
        builder
        .addCase(getUserById.pending, (state) => {
            state.requestStatus = "pending"
        })
        .addCase(getUserById.fulfilled, (state, { payload }) => {
            state.requestStatus = "fulfiled"

            entityAdapter.upsertOne(state, payload)
        })
        .addCase(getUserById.rejected, (state) => {
            state.requestStatus = "reject"
        }),
})

export const {
    selectUserById,
    selectRequestStatus,
} = userSlice.selectors