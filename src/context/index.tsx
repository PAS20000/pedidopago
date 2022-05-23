import * as React from 'react'
import ThemeProvider from '../context/ThemeContext/ThemeContext'
import UserStateProvider from './UserStateContext/UserStateContext'

type Props = {
    children:React.ReactNode
}

export const GlobalProvider = ({
    children
}:Props) => {

    return(
        <ThemeProvider>
            <UserStateProvider>
                {children}
            </UserStateProvider>
        </ThemeProvider>
    )
}

export default GlobalProvider