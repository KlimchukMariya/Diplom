import { createContext } from "react";

type ThemeContextType = {
 theme: 'light' | 'dark',
 changeTheme: () => void
} 

export const ThemeContext = createContext<ThemeContextType>({ theme: 'light', changeTheme: () => {}})