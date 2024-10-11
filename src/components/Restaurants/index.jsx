import { useState } from "react"
import { Restaturant } from "../Restaurant"
import { Tabs } from "../Tabs"
import styles from './styles.module.css'

export const Restaurants = ({ restaurantsName }) => {
  
  const [activeTab, setActiveTab] = useState(restaurantsName[0]?.id)
    return (
      <div className={styles.restaurant_block}>
        <h1>Restaurants</h1>
        <Tabs tabsName={restaurantsName} activeTab={activeTab} setActiveTab={setActiveTab}>
          <Restaturant id = { activeTab }/>
        </Tabs>
      </div>
    )

} 