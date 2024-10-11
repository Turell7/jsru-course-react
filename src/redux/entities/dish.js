import { createSlice } from "@reduxjs/toolkit"
import { normalizedDishes } from "../../constants/normalized-mock"

export const dishSlice = createSlice({
    name: "dish",
    initialState: {
        entities: normalizedDishes.reduce((acc, item) => {
            acc[item.id] = item
            return acc
        }, {}),
    },
    selectors: {
        selectDishById: (state, id) => state.entities[id],
    }
})

export const {
    selectDishById,
} = dishSlice.selectors