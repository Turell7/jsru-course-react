import { createAsyncThunk } from "@reduxjs/toolkit"

const getDishes = createAsyncThunk(
    `dish/getDishes`,
    async (dishId, { rejectWithValue, fulfillWithValue }) => {
        console.log({dishId})
        const response = await fetch( 
            "http://localhost:3001/api/dishes"
    // `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
        )
        const result = await response.json()

        if (!result.length) {
            rejectWithValue("empty result")
        }

        return fulfillWithValue(result)
    },
)

const getDishById = createAsyncThunk(
    `dish/getDishById`,
    async (dishId, { rejectWithValue, fulfillWithValue }) => {
        const response = await fetch(
    `http://localhost:3001/api/dish/${dishId}`
        )
        const result = await response.json()

        if (!result.length) {
            rejectWithValue("empty result")
        }

        return fulfillWithValue(result)
    },
)

export {
    getDishes,
    getDishById,
}