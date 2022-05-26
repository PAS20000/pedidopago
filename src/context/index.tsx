import * as React from 'react'
import ThemeProvider from '../context/ThemeContext/ThemeContext'
import DataProvider from './DataContext/DataContex'
import UXProvider from './UXContext/UXContext'

type Props = {
    children:React.ReactNode
}

export const GlobalProvider = ({
    children
} : Props) => {

    return(
        <DataProvider>
            <UXProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </UXProvider>
        </DataProvider>
    )
}

export default GlobalProvider