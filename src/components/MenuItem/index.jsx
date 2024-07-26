import { CounterContainer } from '../Counter/container.jsx'
import { Ingredient } from '../Ingredient/index.jsx'

export const MenuItem = ({ item }) => {
    return (
        <li>
            {item.name} - ${item.price}
            <CounterContainer/>
            <Ingredient ingredients={item.ingredients}/>
        </li>
    )
}