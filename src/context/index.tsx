import * as React from 'react'
import ThemeProvider from '../context/ThemeContext/ThemeContext'
import BreadCrumbProivder from './BreadCrumbsContext/BreadCrumbsContext'
import DataProvider from './DataContext/DataContex'
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
                    <BreadCrumbProivder>
                        {children}
                    </BreadCrumbProivder>
                </ThemeProvider>
            </UXProvider>
        </DataProvider>
    )
}

export default GlobalProvider