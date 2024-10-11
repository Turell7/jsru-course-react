import { createSlice } from "@reduxjs/toolkit"
import { normalizedRestaurants } from "../../constants/normalized-mock"

export const restaurantSlice = createSlice({
    name:  "restaurant",
    initialState: {
        entities: normalizedRestaurants.reduce((acc, item) => {
            acc[item.id] = item

            return acc
        }, {}),
        ids: normalizedRestaurants.map((item) => item.id),
        idsNames: normalizedRestaurants.map((item) => ({
            id: item.id,
            name: item.name,
        })),
    },
    selectors: {
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
        // selectRestaurantsIdsNames: (state) => state.ids.map(id => ({
        //     id: id,
        //     name: state.entities[id].name
        // })),
        selectRestaurantsIdName: (state) => state.idsNames
    }
})

export const {
    selectRestaurantsIds,
    selectRestaurantById,
    selectRestaurantsIdName,
} = restaurantSlice.selectors 