import * as React from 'react'
import NextImage from '../../Contracts/NextImage'
import { Container, DefaultAtavar, Flex } from './index.styles'


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
                <DefaultAtavar>
                    <p>
                        LZ
                    </p>
                </DefaultAtavar>
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