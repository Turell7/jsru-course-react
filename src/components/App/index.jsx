import { createContext } from 'react'
import { restaurants } from '../../mock.js'
import { Restaurants } from '../Restaurants/index.jsx'
import { Layout } from '../layout/index.jsx'
import { ThemeContextProvider } from '../ThemeContext/index.jsx'
import { UserContextProvider } from '../UserContext/index.jsx'

export const ThemeContext = createContext()

export const App = () => {
    return (
        <ThemeContextProvider>
            <UserContextProvider>
            <Layout>
                <Restaurants restaurants={restaurants}/>
            </Layout>
            </UserContextProvider>
        </ThemeContextProvider>
    )
}