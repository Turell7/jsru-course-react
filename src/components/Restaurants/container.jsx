import { useSelector } from "react-redux"
import { Restaurants } from "."
import { selectRestaurantsIdName } from "../../redux/entities/restaurant"

export const RestaurantsContainer = () => {
const restaurantsName = useSelector(selectRestaurantsIdName)

    return <Restaurants restaurantsName={restaurantsName}/>
}