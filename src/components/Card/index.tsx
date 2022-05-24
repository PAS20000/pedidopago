import * as React from 'react'
import { Container } from './index.styles'

type TCard = {
    children:React.ReactNode
}

const Card = ({
    children
} : TCard) => {


    return(
        <Container>
            {children}
        </Container>     
    )
}

export default Card