import { useState } from "react"
import { useContext } from "react"
import { createContext } from "react"

const UserContext = createContext()
export const useUser = () => useContext(UserContext)

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
  
    const login = (name) => setUser({ name })
    const logout = () => setUser(null)

    return (
        <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>
    )
}