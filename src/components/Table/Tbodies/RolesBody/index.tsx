import * as React from 'react'
import { AiOutlineMore } from 'react-icons/ai'
import { TRoles } from '../../../../../pages'

const RolesBody = ({
    name,
    departament,
    agents_quantity
} : TRoles) => {
    return(
    <tr>
        <td>
            {name}
        </td>
        <td>
            {departament}
        </td>
        <td>
            {agents_quantity}
        </td>
        <td>
            <button>
                <AiOutlineMore />
            </button>
        </td>
  </tr>
)
}

export default RolesBody