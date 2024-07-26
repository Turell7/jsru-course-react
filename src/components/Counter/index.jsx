export const Counter = ({ value, increment, decrement }) => {

    return (<>
        <button onClick={decrement}>-</button>
            {value}
        <button onClick={increment}>+</button>
    </>)
}