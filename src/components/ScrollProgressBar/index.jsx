import { useEffect } from "react"
import { useState } from "react"
import { throttle } from "throttle-debounce"
import styles from "./styles.module.css"

export const ScrollProgressBar = () => {
    const [progress, setProgress] = useState()
    const handleScroll = throttle(20, () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight
        const progressHeight = (window.pageYOffset / totalHeight) * 100
        setProgress(progressHeight)
    } )

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={styles.progressBar}
        style={{ width: `${progress}%` }}
        ></div>
    )
} 