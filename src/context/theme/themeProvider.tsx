import { ReactNode, useLayoutEffect } from "react"
import { useLocalStorage } from "../../shared/hook/useLocalStorage"
import { ThemeContext } from "./themeContext"

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

 const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light')

 useLayoutEffect(() => {
  const root = window.document.documentElement
  root.setAttribute('data-theme', theme)
 }, [theme])

 const changeTheme = () => {
  setTheme(prev => prev === 'light' ? 'dark' : 'light')
 }


 return <ThemeContext.Provider value={{
  theme,
  changeTheme
 }}>{children}</ThemeContext.Provider>

}