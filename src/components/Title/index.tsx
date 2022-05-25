import * as React from 'react'
import { Container } from './index.styles'

type TTitle = {
    children:React.ReactChild
}

const Title = ({
    children
} : TTitle) => {

    return (
        <Container>
            {children}
        </Container>
    )
}

export default Title