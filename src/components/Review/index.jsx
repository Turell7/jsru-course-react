import { ReviewForm } from "../ReviewForm"

export const Review = ({ reviews }) => {

    return (
        <>
        <h3>Reviews:</h3>
        <ul>
            {reviews?.length ? reviews.map((review) => (
            <li key={review.id}>
                <strong>{review.user}</strong>: {review.text} (Rating: {review.rating})
            </li>
            )) : <li>Your review will be the first!</li>}
        </ul>
        <ReviewForm/>
        </>
    )
}