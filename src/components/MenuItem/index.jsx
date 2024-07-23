import { useCount } from '../../hooks/useCount.js'
import { Ingredient } from '../Ingredient/index.jsx'

export const MenuItem = ({ item }) => {
    const { count, increment, decrement } = useCount()
    return (
        <li>
            {item.name} - ${item.price}
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
            <Ingredient ingredients={item.ingredients}/>
        </li>
    )
}