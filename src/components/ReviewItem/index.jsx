import { useSelector } from "react-redux"
import { selectReviewById } from "../../redux/entities/review"
import { selectRequestStatus, selectUserById } from "../../redux/entities/user"
import { RatingStars } from "../RatingStars"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getUserById } from "../../redux/entities/user/get-users"
import { getReviewById } from "../../redux/entities/review/get-reviews"

export const ReviewItem = ({ id }) => {
    const review = useSelector((state) => selectReviewById(state, id))
    const userId = review?.userId
    const reviewer = useSelector((state) => selectUserById(state, userId))
    const requestStatus = useSelector(selectRequestStatus)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getReviewById(id))
    }, [dispatch, id])

    useEffect(() => {
        if ( userId ) {
            dispatch(getUserById(userId))
        }
    }, [dispatch, userId])

    if (requestStatus === "idle" || requestStatus === "pending") {
        return "Loading"
    }

    if (requestStatus === "rejected") {
        return "error"
    }

    return (
        <>
        <RatingStars rating={review?.rating}/>
        <strong>{reviewer?.name}</strong>: {review?.text}
        </>
    )
}