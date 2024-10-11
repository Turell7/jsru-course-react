import { useSelector } from "react-redux"
import { selectReviewById } from "../../redux/entities/review"
import { selectUserById } from "../../redux/entities/user"
import { RatingStars } from "../RatingStars"

export const ReviewItem = ({ id }) => {
    const review = useSelector((state) => selectReviewById(state, id))
    const revier = useSelector((state) => selectUserById(state, review.userId))

    return (
        <>
        <RatingStars rating={review.rating}/>
        <strong>{revier.name}</strong>: {review.text}
        </>
    )
}