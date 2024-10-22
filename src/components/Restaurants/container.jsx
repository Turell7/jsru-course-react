import { useSelector } from "react-redux"
import { Restaurants } from "."
import { selectRequestStatus, selectRestaurantsIds } from "../../redux/entities/restaurant"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurant"

export const RestaurantsContainer = () => {
const restaurantsIds = useSelector(selectRestaurantsIds)
const requestStatus = useSelector(selectRequestStatus)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(getRestaurants())
}, [dispatch])

if (requestStatus === "idle" || requestStatus === "pending") {
    return "Loading"
}

if (requestStatus === "rejected") {
    return "error"
}

    return <Restaurants ids={restaurantsIds}/>
}