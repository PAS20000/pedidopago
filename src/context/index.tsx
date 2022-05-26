import * as React from 'react'
import ThemeProvider from '../context/ThemeContext/ThemeContext'
import BreadCrumbProivder from './BreadCrumbsContext/BreadCrumbsContext'
import DataProvider from './DataContext/DataContex'
import UserStateProvider from './UserStateContext/UserStateContext'
import UXProvider from './UXContext/UXContext'

type Props = {
    children:React.ReactNode
}

export const GlobalProvider = ({
    children
}:Props) => {

    return(
        <DataProvider>
            <UXProvider>
                <ThemeProvider>
                    <UserStateProvider>
                        <BreadCrumbProivder>
                            {children}
                        </BreadCrumbProivder>
                    </UserStateProvider>
                </ThemeProvider>
            </UXProvider>
        </DataProvider>
    )
}

export default GlobalProvider