import { ReviewForm } from "../ReviewForm"
import { ReviewItem } from "../ReviewItem"
import { useUser } from "../UserContext/hooks"

export const Review = ({ ids }) => {
    const {isAuthorized} = useUser()

    return (
        <>
        <h3>Reviews:</h3>
        <ul>
            {ids?.length ? ids.map((id) => (
            <li key={id}>
                <ReviewItem id = { id }/>
            </li>
            )) : <li>Your review will be the first!</li>}
        </ul>
        { isAuthorized && <ReviewForm/>}
        </>
    )
}