import { useSelector } from "react-redux"
import { selectRequestStatus, selectRestaurantById } from "../../redux/entities/restaurant"
import { Menu } from "../Menu"
import { Review } from "../Review"
import { useDispatch } from "react-redux"
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurant"
import { useEffect } from "react"

export const Restaturant = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id))
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
    return (
        <div title="title">
              <h2>{restaurant.name}</h2>
              <Menu ids={restaurant.menu}/>
              <Review ids={restaurant.reviews}/>
            </div>
    )
}