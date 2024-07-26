import { useReducer } from "react"
import { RatingStars } from "../RatingStars"

const INITIAL_FORM = {
    name: '',
    text: '',
    rating: 0,
}
    
function reducer(state, { type, payload }) {
    switch (type) {
        case "setName":
            return { ...INITIAL_FORM, name: payload }
        case "setText":
            return { ...state, text: payload }
        case "setRating":
            return {...state, rating: payload }
        case "clear":
            return INITIAL_FORM
        default:
            return state
    }
}

export const ReviewForm = () => {
const [form, dispatch] = useReducer(reducer, INITIAL_FORM)
const { name, text, rating } = form;

    return (
        <div>
            <div>
                <span>Name</span>
                <input value={name} onChange= {(event) => {
                    dispatch({ type: "setName", payload: event.target.value })
                }}/>
            </div>
            <div>
                <span>Text</span>
                <input value={text} onChange= {(event) => {
                    dispatch({ type: "setText", payload: event.target.value })
                }}/>
            </div>
            <RatingStars rating={rating} dispatch={dispatch}/>
            <button onClick={() => dispatch({ type: "clear"})}>Save</button>
            <button onClick={() => dispatch({ type: "clear"})}>Clear</button>
        </div>
    )
}