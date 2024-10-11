import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurant"
import { Menu } from "../Menu"
import { Review } from "../Review"

export const Restaturant = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id))
    
    return (
        <div title="title">
              <h2>{restaurant.name}</h2>
              <Menu ids={restaurant.menu}/>
              <Review ids={restaurant.reviews}/>
            </div>
    )
}