import * as React from 'react'
import NextImage from '../../Contracts/NextImage'
import { Container, DefaultAtavar, Flex } from './index.styles'


const NavTop = () => {

    return(
        <Container>
            <div className='Logo'>
                <NextImage 
                    src='/img/logo.png'
                    alt='logo'
                    width='65px'
                    height='65px'
                />
            </div>
            <Flex>
                <DefaultAtavar>
                    <p>
                        LZ
                    </p>
                </DefaultAtavar>
                <p className='info'>
                    <span className='user'>
                        Luiz ZloChevsky
                    </span>
                    <span>
                        meus dados
                    </span>
                </p>
            </Flex>
        </Container>
    )
}

export default NavTop