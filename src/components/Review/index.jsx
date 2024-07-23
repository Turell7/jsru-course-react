export const Review = ({ items }) => {

    return (
        <>
        <h3>Reviews:</h3>
        <ul>
            {/* {Boolean(restaurant.reviews?.length) && restaurant.reviews.map((review) => ( */}
            {items?.length ? items.map((review) => (
            <li key={review.id}>
                <strong>{review.user}</strong>: {review.text} (Rating: {review.rating})
            </li>
            )) : <li>Your review will be the first!</li>}
        </ul>
        </>
    )
}