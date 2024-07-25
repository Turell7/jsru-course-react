import { Counter } from "."
import { useCount } from "../../hooks/useCount"

export const CounterContainer = () => {
    const { count, increment, decrement } = useCount()
    
    return <Counter value={count} increment={increment} decrement={decrement}/>
}