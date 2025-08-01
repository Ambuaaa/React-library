import { createContext, useContext } from "react";

// created a Provider named = ThemeContext
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
  // basically we can give anything inside it bydefault - variables/methods/ last project we passed state
})

// likho ya na likho (ye shortcut hai)
export const ThemeProvider = ThemeContext.Provider 

// custom hook(wrapper) which will basically allow any child component that is wrapped inside the ThemeProvider to access the values stored in the context - themeMode, darkTheme(), lightTheme()
export default function useTheme(){
  return useContext(ThemeContext)
}

// ThemeContext is a Water Tank (source of theme data)
// .Provider is the Tap connected to that tank that sends water (theme data) down to all pipes (child components)
// useContext(ThemeContext) is like turning on the tap to access the water.
/*

*/