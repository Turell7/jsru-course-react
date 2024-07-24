import { Menu } from "../Menu";
import { Review } from "../Review";
import { Tabs } from "../Tabs";
import styles from './styles.module.css'

export const Restaurant = ({ restaurants }) => {
    return (
      <div className={styles.restaurant_block}>
        <Tabs>
          {Boolean(restaurants?.length) && restaurants.map(({ name, id, menu, reviews }) => (
            <div title={name} key={id}>
              <h2>{name}</h2>
              <Menu menu={menu}/>
              <Review reviews={reviews}/>
            </div>
          ))}
        </Tabs>
        <Tabs>
          {Boolean(restaurants?.length) && restaurants.map(({ name, id, menu, reviews }) => (
            <div title={name} key={id}>
              <h2>{name}</h2>
              <Menu menu={menu}/>
              <Review reviews={reviews}/>
            </div>
          ))}
        </Tabs>
      </div>
    )

} 