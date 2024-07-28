import { CounterContainer } from '../Counter/container.jsx'
import { Ingredient } from '../Ingredient/index.jsx'
import { useUser } from '../UserContext/index.jsx'

export const MenuItem = ({ item }) => {
    const { user } = useUser()
    return (
        <li>
            {item.name} - ${item.price}
            {user && <CounterContainer/>}
            <Ingredient ingredients={item.ingredients}/>
        </li>
    )
}