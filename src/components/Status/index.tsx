import * as React from 'react'
import useUXCTX from '../../hooks/useUXCTX/useUXCTX'
import { Label } from './index.styles'

type TStatus = {
    status:'active' | 'inactive'
}

const Status = ({
    status
} : TStatus) => {

   const { translate } = useUXCTX()

    return(
        <Label>
            <p className={(status ?? 'inactive')}>
                {translate(status)}
            </p>
        </Label>
    )
}

export default Status