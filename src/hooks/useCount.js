import { useState } from "react";

export const useCount = (min = 0, max = 5) => {
    const [count, setCount] = useState(min);

    const increment = () => {
        setCount((prevState) => prevState < max ? prevState + 1 : prevState)
    };
    const decrement = () => {
        setCount((prevState) => prevState > min ? prevState - 1 : prevState )
    };
    return {
        count,
        increment,
        decrement,
    }
}