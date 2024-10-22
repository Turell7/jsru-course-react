import { createSlice } from "@reduxjs/toolkit"
import { getReviewById } from "./get-reviews"
import { createEntityAdapter } from "@reduxjs/toolkit"
const entityAdapter = createEntityAdapter()

export const reviewSlice = createSlice({
    name: "review",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectReviewById: (state, id) => state.entities[id],
    },
    extraReducers: (builder) =>
        builder
        .addCase(getReviewById.pending, (state) => {
            state.requestStatus = "pending"
        })
        .addCase(getReviewById.fulfilled, (state, { payload }) => {
            state.requestStatus = "fulfiled"

            entityAdapter.upsertOne(state, payload)
        })
        .addCase(getReviewById.rejected, (state) => {
            state.requestStatus = "reject"
        }),
})

export const {
    selectReviewById,
} = reviewSlice.selectors