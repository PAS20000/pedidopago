import * as React from 'react'
import { light } from '../../style/theme/theme.styles'
import { ThemeProvider } from '@emotion/react' 

type States = 'dark' | 'light'

export type TTheme = {
    mode:States
    setMode:React.Dispatch<React.SetStateAction<States>>
}

type TThemeProviderApp = {
    children:React.ReactNode
}

export const ThemeContext = React.createContext<TTheme>(null)

const ThemeProviderApp = ({
    children
} : TThemeProviderApp) => {
    const [mode, setMode] = React.useState<States>('light')
    
   return(
        <ThemeContext.Provider value={{mode, setMode}}>
            <ThemeProvider theme={light}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
   
export default ThemeProviderApp