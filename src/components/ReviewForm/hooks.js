import { useReducer } from "react"

const INITIAL_FORM = {
    name: '',
    text: '',
    rating: 0,
}
const ratingMax = 5
const ratingMin = 0
    
function reducer(state, { type, payload }) {
    switch (type) {
        case "setName":
            return { ...INITIAL_FORM, name: payload }
        case "setText":
            return { ...state, text: payload }
        case "setRating":
            return {...state, rating: payload }
        case "incrementRating":
            return {...state, rating: Math.min(ratingMax, state.rating + 1)}
        case "decrementRating":
            return {...state, rating: Math.max(ratingMin, state.rating - 1)}
        case "clear":
            return INITIAL_FORM
        default:
            return state
    }
}

export const useForm = () => {
    return useReducer(reducer, INITIAL_FORM)
}