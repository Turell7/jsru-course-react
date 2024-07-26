import { useCallback } from "react"
import { useState } from "react"

export const useCount = (min = 0, max = 5) => {
    const [count, setCount] = useState(min)

    const increment = useCallback(() => {
        setCount((prevState) => prevState < max ? prevState + 1 : prevState)
    }, [max])
    const decrement = useCallback(() => {
        setCount((prevState) => prevState > min ? prevState - 1 : prevState )
    }, [min])
    return {
        count,
        increment,
        decrement,
    }
}