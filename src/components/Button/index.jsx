import { useTheme } from '../ThemeContext/hooks'
import styles from './styles.module.css'

export const Button = ({children, onClick}) => {
    const { value: theme} = useTheme()
return (
    <button onClick={onClick} className={`${styles.button} ${styles[theme]}`}
  >{children}</button>
        )
}