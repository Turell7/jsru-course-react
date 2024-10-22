import styles from './styles.module.css'
import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurant"
import classNames from 'classnames'

export const TabsButton = ({ id, activeTab, setActiveTab }) => {
    // console.log({id})
    const title = useSelector((state) => (selectRestaurantById(state, id)))
    // console.log({title})
    const handleClick = (index) => {
        setActiveTab(index)
      }
    return (
        <li
            className={classNames(
            styles.tab,
            {[styles.active]: activeTab === id})}
            onClick={() => {handleClick(id)
            }}
        >
            {title.name}
        </li>
    )
}