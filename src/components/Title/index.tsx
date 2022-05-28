import * as React from 'react'
import NextLink from '../Contracts/NextLink'
import { Container } from './index.styles'
import { AiOutlineArrowLeft } from 'react-icons/ai'

type TTitle = {
    children:React.ReactChild
    href?:string
    
}

const Title = ({
    children,
    href,
} : TTitle) => {

    return (
        <Container>
            {href ?
                <div>
                    <NextLink href={href} target={'_self'}>
                        <button>
                            <AiOutlineArrowLeft />
                        </button>
                    </NextLink>
                    <h1>
                        {children}
                    </h1>
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