import { useSelector } from 'react-redux'
import { CounterContainer } from '../Counter/container.jsx'
import { Ingredient } from '../Ingredient'
import { useUser } from '../UserContext/hooks.js'
import { selectDishById, selectRequestStatus } from '../../redux/entities/dish'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getDishById } from '../../redux/entities/dish/get-dish.js'

export const MenuItem = ({ id }) => {
    const { isAuthorized } = useUser()
    const dish = useSelector((state) => selectDishById(state, id))
    const requestStatus = useSelector(selectRequestStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDishById(id))
    }, [dispatch, id])

    if (requestStatus === "idle" || requestStatus === "pending") {
        return "Loading"
    }
    
    if (requestStatus === "rejected") {
        return "error"
    }
    return (
        <li>
            {dish && `${dish.name} - $${dish.price}`}
            {isAuthorized && <CounterContainer/>}
            {dish && <Ingredient ingredients={dish.ingredients}/>}
        </li>
    )
}