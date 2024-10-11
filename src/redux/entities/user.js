import { createSlice } from "@reduxjs/toolkit"
import { normalizedUsers } from "../../constants/normalized-mock"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        entities: normalizedUsers.reduce((acc, item) => {
            acc[item.id] = item
            return acc
        }, {}),
    },
    selectors: {
        selectUserById: (state, id) =>state.entities[id],
    }
})

export const {
    selectUserById
} = userSlice.selectors