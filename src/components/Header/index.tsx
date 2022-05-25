import * as React from 'react'
import { Container } from './index.styles'

type THeader = {
    children:React.ReactNode
}

const Header = ({
    children
} : THeader) => {

    return (
        <Container>
            {children}
        </Container>
    )
}

export default Header