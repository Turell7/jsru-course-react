import { useEffect } from "react"
import { useState } from "react"

export const ScrollProgressBar = () => {
    const [progress, setProgress] = useState()
    const handleScroll = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight
        const progressHeight = (window.pageYOffset / totalHeight) * 100
        setProgress(progressHeight)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${progress}%`,
                height: '5px',
                backgroundColor: 'red',
                zIndex: 9999,
            }}
        ></div>
    )
} 