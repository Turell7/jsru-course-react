import React, { useState } from 'react'
import { Tab } from "../Tab"
import styles from './styles.module.css'
import classNames from 'classnames'

export const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0)
  
    const handleClick = (index) => {
      setActiveTab(index)
    }

    const elActiveTab = React.Children.toArray(children).find((child, index) => index === activeTab)
    ? <Tab>{React.Children.toArray(children).find((child, index) => index === activeTab).props.children}</Tab>
    : null

    return (
      <div>
        <ul>
          {React.Children.map(children, (child, index) => (
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