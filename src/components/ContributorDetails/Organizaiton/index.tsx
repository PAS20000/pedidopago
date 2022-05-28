import * as React from 'react'
import LabelText from '../../LabelText'
import { ContainerOrg } from './index.styles'

type TOrganization = {
    title:string
    options:Array<string>
    width:string
}


const Organization = ({
    title,
    options,
    width
} : TOrganization) => {

    return(
        <ContainerOrg>
            <LabelText width={width}>
                {title}
            </LabelText>
            <select>
                {options.map((option, index) => 
                    <option key={index} value={option}>
                        {option}
                    </option>
                )}
            </select>    
        </ContainerOrg>
    )
}

export default Organization