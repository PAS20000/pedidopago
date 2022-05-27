import * as React from 'react'
import { ContainerStyle } from './index.styles'

type TCard = {
    children:React.ReactNode
    border?:'solid'
}

const Container = ({
    children,
    border
} : TCard) => {

    return(
        <ContainerStyle className={border}>
            {children}
        </ContainerStyle>     
    )
}

export default Container