import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  // there we didn't defined the functionality of both method , hence defining here => functionality apne aap chali jaegi 
  // we could also have just used single method = toggleTheme and can pass in the value instead of lightTheme, and DarkTheme 
  // the logic would have been = setThemeMode(prev => (prev === "light" ? "dark" : "light"));
  
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme 
  useEffect( ()=> {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
   <ThemeProvider value={{themeMode, lightTheme, darkTheme}}> 

<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theme button  */}
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card button  */}
                       <Card />
                    </div>
                </div>
</div>

</ThemeProvider> 

  )
}

export default App
