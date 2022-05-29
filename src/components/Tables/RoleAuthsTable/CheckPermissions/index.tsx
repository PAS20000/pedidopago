import * as React from 'react'
import { BsCheck } from 'react-icons/bs'
import { Check } from './index.styles'

type TCheckPermission = {
    auth?:boolean
}

const CheckPermission = ({
    auth
} : TCheckPermission) => {

    return(
        <Check>
        {auth ?
            <div className='check allowed'>
                <BsCheck />
            </div> 
            : 
            <div className='check notAllowed' />
        }
        </Check>
    )
    
}

export default CheckPermission