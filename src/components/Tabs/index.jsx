import React, { useState } from 'react';
import { Tab } from "../Tab";
import styles from './styles.module.css';

export const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    const handleClick = (index) => {
      setActiveTab(index);
    };
  
    return (
      <div>
        <ul className={styles.tabs}>
          {React.Children.map(children, (child, index) => (
            <li
              key={index}
              className={activeTab === index ? styles.active : ''}
              onClick={() => handleClick(index)}
            >
                {console.log({activeTab})}
                {console.log({index})}
              {child.props.title}
            </li>
          ))}
        </ul>
        <div className={styles.tab_content}>
          {React.Children.map(children, (child, index) =>
            activeTab === index ? <Tab>{child.props.children}</Tab> : null
          )}
        </div>
      </div>
    );
  };