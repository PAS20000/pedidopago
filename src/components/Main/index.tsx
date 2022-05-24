import * as React from 'react'
import { MainBg } from './index.styles'

type TMain = {
    children:React.ReactNode
}

const Main = ({
    children
} : TMain) => {

    return (
        <MainBg>
            {children}
        </MainBg>
    )
}

export default Main