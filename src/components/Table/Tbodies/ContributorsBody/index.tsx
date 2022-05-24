import * as React from 'react'
import { AiOutlineMore } from 'react-icons/ai'
import { TContributors } from '../../../../../pages'
import NextImage from '../../../Contracts/NextImage'

const ContributorsBody = ({
    name,
    image,
    department,
    role,
    branch,
    status
} : TContributors) => {
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

export default ContributorsBody