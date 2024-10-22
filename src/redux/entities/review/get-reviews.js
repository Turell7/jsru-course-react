import { createAsyncThunk } from "@reduxjs/toolkit"

const getReviewById = createAsyncThunk(
    `review/getReviewsById`,
    async (reviewId, {rejectWithValue, fulfillWithValue}) => {
        const response = await fetch(
            `http://localhost:3001/api/review/${reviewId}`
        )
        const result = await response.json()

        if (!result.length) {
            rejectWithValue("empty result")
        }

        return fulfillWithValue(result)
    }
)

export {
    getReviewById,
}