import * as React from 'react'


type States = 'dark' | 'light'

type Contenxt = {
    mode:States
    setMode:Function
}
export const ThemeContext = React.createContext<Contenxt>(null)

const ThemeProvider = ({children}) => {
    const [mode, setMode] = React.useState<States>('light')
   
   return(
        <ThemeContext.Provider value={{mode, setMode}}>
            {children}
        </ThemeContext.Provider>
    )
}
   
export default ThemeProvider