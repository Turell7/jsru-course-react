import { Counter } from '../Counter/index.jsx'
import { Ingredient } from '../Ingredient/index.jsx'

export const MenuItem = ({ item }) => {
    return (
        <li>
            {item.name} - ${item.price}
            <Counter/>
            <Ingredient ingredients={item.ingredients}/>
        </li>
    )
}