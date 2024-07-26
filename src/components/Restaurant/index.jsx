import { Menu } from "../Menu";
import { Review } from "../Review";
import { Tabs } from "../Tabs";
import styles from './styles.module.css'

export const Restaurant = ({ items }) => {
    // const {
    //     count, decrement, increment
    // } = useCount();
    // const decrement = () => {
    //     setCount({
    //         ...count,
    //         value: count.value - 1
    //     })
    // };
    return (
      <div className={styles.restaurant_block}>
      <Tabs>
        {Boolean(items?.length) && items.map((restaurant) => (
          <div title={restaurant.name} key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <Menu menu={restaurant.menu}/>
            <Review items={restaurant.reviews}/>
          </div>
        ))}
      </Tabs>
  </div>
    )

} 