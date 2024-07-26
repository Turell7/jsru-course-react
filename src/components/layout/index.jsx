import { Footer } from "../Footer"
import { Header } from "../Header"
import { ScrollProgressBar } from '../ScrollProgressBar/index.jsx'

export const Layout = ({ children }) => {
    return ( <>
        <ScrollProgressBar/>
        <Header/>
        {children}
        <Footer/>
    </> )
}