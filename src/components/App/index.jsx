import { createContext } from 'react'
import { Layout } from '../layout/index.jsx'
import { ThemeContextProvider } from '../ThemeContext/index.jsx'
import { UserContextProvider } from '../UserContext/index.jsx'
import { store } from '../../redux/index.js'
import { Provider } from 'react-redux'
import { RestaurantsContainer } from '../Restaurants/container.jsx'

export const ThemeContext = createContext()

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <Layout>
                        <RestaurantsContainer/>
                    </Layout>
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    )
}