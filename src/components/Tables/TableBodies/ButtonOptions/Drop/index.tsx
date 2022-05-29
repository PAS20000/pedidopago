import * as React from 'react'
import { Button, Grid, Flex } from './index.styles'
import NextLink from '../../../../Contracts/NextLink/index'

type TDrop = {
    icon:React.ReactChild
    ancorText:string
    href:string
    className?:string
    onClick?:React.MouseEventHandler
}

const Drop = ({
    icon,
    ancorText,
    href,
    className,
    onClick
} : TDrop) => {
    return(
        <Grid>
            <NextLink href={href} target={'_self'}>
                <Button className={className} onClick={onClick}>
                    <Flex>
                        <span>
                            {icon}
                        </span>
                        <p>
                            {ancorText}
                        </p>    
                    </Flex>
                </Button>
            </NextLink>
        </Grid>
    )
}

export default Drop