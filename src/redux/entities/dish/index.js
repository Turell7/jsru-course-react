import { createSlice } from "@reduxjs/toolkit"
import { createEntityAdapter } from "@reduxjs/toolkit"
import { getDishById, getDishes } from "./get-dish"

const entityAdapter = createEntityAdapter()

export const dishSlice = createSlice({
    name: "dish",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectDishById: (state, id) => state.entities[id],
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => 
        builder
    .addCase(getDishes.pending, (state) => {
        state.requestStatus = "pending"
    })
    .addCase(getDishes.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled"
        entityAdapter.addMany(state, payload)
    })
    .addCase(getDishes.rejected, (state) => {
        state.requestStatus = "reject"
    })
    .addCase(getDishById.pending, (state) => {
        state.requestStatus = "pending"
    })
    .addCase(getDishById.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled"
        entityAdapter.upsertOne(state, payload)
    })
    .addCase(getDishById.rejected, (state) => {
        state.requestStatus = "rejected"
    }),
})

export const {
    selectDishById,
    selectRequestStatus,
} = dishSlice.selectors