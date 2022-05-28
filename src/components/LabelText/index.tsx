import * as React from 'react'
import { FiSearch } from 'react-icons/fi'
import { LabelContainer } from './index.styles'

type TLabel = {
   children:React.ReactChild
   width:string
}

const LabelText = ({
    children,
    width
} : TLabel) => {
    
    return(
        <LabelContainer className={width}>
            <label>
                {children}
            </label>
        </LabelContainer>
    )
}

export default LabelText