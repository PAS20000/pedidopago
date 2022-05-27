import * as React from 'react'
import { FiSearch } from 'react-icons/fi'
import { LabelContainer } from './index.styles'

type TLabel = {
   children:React.ReactChild
}

const LabelText = ({
    children
} : TLabel) => {
   
    return(
        <LabelContainer>
            <label>
                {children}
            </label>
        </LabelContainer>
    )
}

export default LabelText