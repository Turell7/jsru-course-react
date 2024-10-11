import { useSelector } from 'react-redux'
import { CounterContainer } from '../Counter/container.jsx'
import { Ingredient } from '../Ingredient/index.jsx'
import { useUser } from '../UserContext/hooks.js'
import { selectDishById } from '../../redux/entities/dish.js'

export const MenuItem = ({ id }) => {
    const { isAuthorized } = useUser()
    const dish = useSelector((state) => selectDishById(state, id))
    return (
        <li>
            {dish.name} - ${dish.price}
            {isAuthorized && <CounterContainer/>}
            <Ingredient ingredients={dish.ingredients}/>
        </li>
    )
}