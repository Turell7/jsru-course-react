import { restaurants } from '../../mock.js'
import { Restaurants } from '../Restaurants/index.jsx'
import { Layout } from '../layout/index.jsx'

export const App = () => {

    return (
        <Layout>
            <Restaurants restaurants={restaurants}/>
        </Layout>
    )
}