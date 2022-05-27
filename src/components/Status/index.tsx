import * as React from 'react'
import { Label } from './index.styles'

type TStatus = {
    status:'active' | 'inactive'
}

const Status = ({
    status
} : TStatus) => {

    const translate = () : string => {
        if(status === 'active'){
            return 'ativo'
        }
        if(status === 'inactive'){
            return 'inativo'
        }

        return 'inativo'
    }

    return(
    <Label>
        <p className={(status ?? 'inactive')}>
            {translate()}
        </p>
    </Label>
    )
}

export default Status