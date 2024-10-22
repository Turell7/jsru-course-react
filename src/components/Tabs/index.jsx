import styles from './styles.module.css'
// import classNames from 'classnames'
import { TabsButton } from './tabs-button'

export const Tabs = ({ children, ids, activeTab, setActiveTab }) => {
    // const handleClick = (index) => {
    //   setActiveTab(index)
    // }
// Заменить Item на ids, кнопкеу таба вынести в  отдельный компонет
    return (
      <div>
        <ul>
          { ids.map((id) => (
            <TabsButton key={id} id={id} activeTab={activeTab} setActiveTab={setActiveTab} />

            // <li
            //   key={item.id}
            //   className={classNames(
            //     styles.tab,
            //     {[styles.active]: activeTab === item.id})}
            //   onClick={() => {handleClick(item.id)
            //   }}
            // >
            //   {item.name}
            // </li>
          ))}
        </ul>
        <div className={styles.contentTab}>
          {children}
        </div>
      </div>
    )
  }