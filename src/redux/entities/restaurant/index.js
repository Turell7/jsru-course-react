import { createSlice } from "@reduxjs/toolkit"
import { createEntityAdapter } from "@reduxjs/toolkit"
import { getRestaurants } from "./get-restaurant"

const entityAdapter = createEntityAdapter()

export const restaurantSlice = createSlice({
    name:  "restaurant",
    initialState: entityAdapter.getInitialState({ 
        requestStatus: "idle",
    }),
    selectors: {
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) =>
        builder
        .addCase(getRestaurants.pending, (state) => {
            state.requestStatus = "pending"
        })
        .addCase(getRestaurants.fulfilled, (state, { payload }) => {
            state.requestStatus = "fulfilled"

            entityAdapter.setAll(state, payload)
        })
        .addCase(getRestaurants.rejected, (state) => {
            state.requestStatus = "reject"
        }),
})

export const {
    selectRestaurantsIds,
    selectRestaurantById,
    selectRequestStatus,
} = restaurantSlice.selectors 