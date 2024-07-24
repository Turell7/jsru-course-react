import { restaurants } from '../../mock.js'
import { Restaurant } from '../Restaurant/index.jsx'
import { Layout } from '../layout/index.jsx'

export const App = () => {

    return (
        <Layout>
            <Restaurant restaurants={restaurants}/>
        </Layout>
    )
}