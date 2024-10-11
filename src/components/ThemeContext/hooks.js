import { useContext } from "react"
import { ThemeContext } from "./constants"

export const useTheme = () => useContext(ThemeContext) 