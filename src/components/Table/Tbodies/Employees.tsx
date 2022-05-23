import * as React from 'react'
import { AiOutlineMore } from 'react-icons/ai'
import { TEmployees } from '../../../../pages'
import NextImage from '../../Contracts/NextImage/NextImage'

const Employees = ({
    name,
    image,
    department,
    role,
    branch,
    status
} : TEmployees) => {
    return(
    <tr>
        <td>
            <NextImage 
                src={image}
                width={'50px'}
                height={'50px'}
                alt={`imagem-${name}`}
            />
            {name}
        </td>
        <td>
            {department}
        </td>
        <td>
            {role}
        </td>
        <td>
            {branch}
        </td>
        <td>
            {status ?? 'inactive'}
        </td>
        <td>
            <button>
                <AiOutlineMore />
            </button>
        </td>
    </tr>
    )
}

export default Employees