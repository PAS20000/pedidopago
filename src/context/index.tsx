import * as React from 'react'
import ThemeProvider from '../context/ThemeContext/ThemeContext'
import BreadCrumbProivder from './BreadCrumbsContext/BreadCrumbsContext'
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
                <BreadCrumbProivder>
                    {children}
                </BreadCrumbProivder>
            </UserStateProvider>
        </ThemeProvider>
    )
}

export default GlobalProvider