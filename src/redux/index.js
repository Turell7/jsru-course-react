import { configureStore } from "@reduxjs/toolkit"
import { restaurantSlice } from "./entities/restaurant"
import { dishSlice } from "./entities/dish"
import { reviewSlice } from "./entities/review"
import { userSlice } from "./entities/user"

export const store = configureStore({ reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
} }) 