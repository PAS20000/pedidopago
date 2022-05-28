import * as React from 'react'
import { Container } from './index.styles'

type TMain = {
    children:React.ReactNode
}

const Main = ({
    children
} : TMain) => {
    

    return (
        <Container>
            {children}
        </Container>
    )
}

export default Main