import React, { useState } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

export const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0)
    const tabsArray = React.Children.toArray(children)
  
    const handleClick = (index) => {
      setActiveTab(index)
    }

    const elActiveTab = tabsArray.find((child, index) => index === activeTab)
    ? <div>{tabsArray.find((child, index) => index === activeTab).props.children}</div>
    : null

    return (
      <div>
        <ul>
          { tabsArray.map((child, index) => (
            <li
              key={index}
              className={classNames(
                styles.tab,
                {[styles.active]: activeTab === index})}
              onClick={() => handleClick(index)}
            >
              {child.props.title}
            </li>
          ))}
        </ul>
        <div className={styles.contentTab}>
          { elActiveTab }
        </div>
      </div>
    )
  }