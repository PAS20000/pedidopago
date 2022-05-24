import * as React from 'react'
import { TitleH1 } from './index.styles'

type TTitle = {
    children:React.ReactChild
}

const Title = ({
    children
} : TTitle) => {

    return (
        <TitleH1>
            {children}
        </TitleH1>
    )
}

export default Title