import * as React from 'react'
import { ContainerStyle } from './index.styles'

type TCard = {
    children:React.ReactNode
}

const Container = ({
    children
} : TCard) => {


    return(
        <ContainerStyle>
            {children}
        </ContainerStyle>     
    )
}

export default Container