import { useState } from "react"
import { Restaturant } from "../Restaurant"
import { Tabs } from "../Tabs"
import styles from './styles.module.css'

export const Restaurants = ({ ids }) => {
  
  const [activeTab, setActiveTab] = useState(ids[0])
  
    return (
      <div className={styles.restaurant_block}>
        <h1>Restaurants</h1>
        <Tabs ids={ids} activeTab={activeTab} setActiveTab={setActiveTab}>
          <Restaturant id = { activeTab }/>
        </Tabs>
      </div>
    )

} 