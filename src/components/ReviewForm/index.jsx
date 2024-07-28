import { Button } from "../Button"
import { Counter } from "../Counter"
import { RatingStars } from "../RatingStars"
import { useForm } from "./hooks"
import styles from "./styles.module.css"

export const ReviewForm = () => {
    const [form, dispatch] = useForm()
    const { name, text, rating } = form

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
            <div className={styles.ratings_container}>
                <span>Rating</span>
            <Counter value={rating} increment={() => {
                    dispatch({ type: "incrementRating" })
                }} decrement={() => {
                    dispatch({ type: "decrementRating" })
                }}/>
            <RatingStars
                rating={rating}
                changeRating={(rate) => { dispatch({ type: "setRating", payload: rate})}}
                />
            </div>
            <Button onClick={() => dispatch({ type: "clear"})}>Save</Button>
            <Button onClick={() => dispatch({ type: "clear"})}>Clear</Button>  
        </div>
    )
}