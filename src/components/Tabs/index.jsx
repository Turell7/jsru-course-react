import React, { useState } from 'react';
import { Tab } from "../Tab";
import styles from './styles.module.css';

export const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    const handleClick = (index) => {
      setActiveTab(index);
    };

    const elActiveTab = React.Children.toArray(children).find((child, index) => index === activeTab)
    ? <Tab>{React.Children.toArray(children).find((child, index) => index === activeTab).props.children}</Tab>
    : null

    return (
      <div>
        <ul className={styles.tabs}>
          {React.Children.map(children, (child, index) => (
            <li
              key={index}
              className={activeTab === index ? styles.active : ''}
              onClick={() => handleClick(index)}
            >
              {child.props.title}
            </li>
          ))}
        </ul>
        <div className={styles.tab_content}>
          { elActiveTab }
        </div>
      </div>
    );
  };