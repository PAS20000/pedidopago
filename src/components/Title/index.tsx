import * as React from 'react'
import useUXCTX from '../../hooks/useUXCTX/useUXCTX'
import NextLink from '../Contracts/NextLink'
import { Container } from './index.styles'

type TTitle = {
    children:React.ReactChild
    href?:string
    
}

const Title = ({
    children,
    href,
    
} : TTitle) => {

    const {  } = useUXCTX()

    return (
        <Container>
            {href ?
                <div>
                    <NextLink href={href} target={'_self'}>
                        <button>
                           {'<'}
                        </button>
                    </NextLink>
                    {children}
                </div>
                
                :
                <>
                    {children}
                </>
            }
        </Container>
    )
}

export default Title