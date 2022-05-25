import * as React from 'react'
import NextImage from '../../Contracts/NextImage'
import { Container } from './index.styles'


const NavTop = () => {

    return(
        <Container>
            <NextImage 
                src='/img/logo.png'
                alt='logo'
                width='50px'
                height='50px'
            />
        </Container>
    )
}

export default NavTop