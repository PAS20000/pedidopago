import * as React from 'react'
import NextImage from '../../Contracts/NextImage'
import { Container, Flex } from './index.styles'


const NavTop = () => {

    return(
        <Container>
            <NextImage 
                src='/img/logo.png'
                alt='logo'
                width='50px'
                height='50px'
            />
            <Flex>
                <NextImage 
                    src='/img/defaultAvatar.png'
                    alt='avatar'
                    width='50px'
                    height='50px'
                    className='Avatar'
                />
                <p>
                    Luiz ZloChevsky<br />
                    <span>
                        meus dados
                    </span>
                </p>
            </Flex>
        </Container>
    )
}

export default NavTop