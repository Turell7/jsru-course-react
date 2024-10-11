import { useContext } from "react"
import { UserContext } from "./constants"

export const useUser = () => useContext(UserContext)