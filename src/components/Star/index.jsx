import styles from './styles.module.css'

export const Star = ({ filled, onClick }) => {

    return (
        <span className={filled ? styles.filled : styles.star} onClick={onClick}>
                        
        {filled ? '★' : '☆'}
    </span>
    )
}