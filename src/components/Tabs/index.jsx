import styles from './styles.module.css'
import classNames from 'classnames'

export const Tabs = ({ children, tabsName, activeTab, setActiveTab }) => {
    const handleClick = (index) => {
      setActiveTab(index)
    }

    return (
      <div>
        <ul>
          { tabsName.map(( item ) => (
            <li
              key={item.id}
              className={classNames(
                styles.tab,
                {[styles.active]: activeTab === item.id})}
              onClick={() => {handleClick(item.id)
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className={styles.contentTab}>
          {children}
        </div>
      </div>
    )
  }