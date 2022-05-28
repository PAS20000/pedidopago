import * as React from 'react'
import { LabelContainer } from './index.styles'

type TLabel = {
   children:React.ReactChild
   className: 'search' | 'org'
}

const LabelText = ({
    children,
    className
} : TLabel) => {
    
    return(
        <LabelContainer>
            <label className={className}>
                {children}
            </label>
        </LabelContainer>
    )
}

export default LabelText