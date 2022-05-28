import * as React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
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
            <div className='Drop'>
                {options.map((option, index) => 
                    <div key={index}>
                        <span>
                            {option}
                        </span>
                        <span className='icon'>
                            <MdOutlineKeyboardArrowDown />
                        </span>
                    </div>
                )}
            </div>    
        </ContainerOrg>
    )
}

export default Organization