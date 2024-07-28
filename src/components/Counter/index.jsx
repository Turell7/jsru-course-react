import { Button } from "../Button"

export const Counter = ({ value, increment, decrement }) => {

    return (<>
        <Button onClick={decrement}>-</Button>
            {value}
        <Button onClick={increment}>+</Button>
    </>)
}