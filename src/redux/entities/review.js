import { createSlice } from "@reduxjs/toolkit"
import { normalizedReviews } from "../../constants/normalized-mock"

export const reviewSlice = createSlice({
    name: "review",
    initialState: {
        entities: normalizedReviews.reduce((acc, item) => {
            acc[item.id] = item
            return acc
        }, {}),
    },
    selectors: {
        selectReviewById: (state, id) => state.entities[id],
    }
})

export const {
    selectReviewById,
} = reviewSlice.selectors