import * as React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import LabelText from '../../LabelText'
import { ContainerOrg } from './index.styles'

type TOrganization = {
    title:string
    options:Array<string>
}


const Organization = ({
    title,
    options,
} : TOrganization) => {

    return(
        <ContainerOrg>
            <LabelText className='org'>
                {title}
            </LabelText>
            <div className='Drop'>
                {options.map((option, index) =>
                    <div key={index}>
                        <span className='option'>
                            {option}
                        </span>
                        {index === 0 && 
                            <span className='icon'>
                                <MdOutlineKeyboardArrowDown />
                            </span>
                        }
                    </div>
                )}
            </div>    
        </ContainerOrg>
    )
}

export default Organization