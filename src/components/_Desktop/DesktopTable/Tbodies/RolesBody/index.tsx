import * as React from 'react'
import { TRoles } from '../../../../../../pages'
import ButtonOptions from '../ButtonOptions'

const RolesBody = ({
    name,
    departament,
    agents_quantity
} : TRoles) => {
    return(
    <tr>
        <td>
            <p>
                {name}
            </p>
        </td>
        <td>
            <p>
                {departament}
            </p>
        </td>
        <td>
            <p>
                {agents_quantity}
            </p>
        </td>
        <td>
           <ButtonOptions id={1}/>
        </td>
  </tr>
)
}

export default RolesBody