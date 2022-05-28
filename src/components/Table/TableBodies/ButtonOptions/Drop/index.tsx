import * as React from 'react'
import { Button, Grid, Flex } from './index.styles'
import NextLink from '../../../../../components/Contracts/NextLink/index'

type TDrop = {
    icon:React.ReactChild
    ancorText:string
    href:string
    className?:string
}

const Drop = ({
    icon,
    ancorText,
    href,
    className
} : TDrop) => {
    return(
        <Grid>
            <Button className={className}>
                <Flex>
                    <span>
                        {icon}
                    </span>
                    <NextLink href={href} target={'_self'}>
                        <p>
                            {ancorText}
                        </p>    
                    </NextLink>
                </Flex>
            </Button>
        </Grid>
    )
}

export default Drop