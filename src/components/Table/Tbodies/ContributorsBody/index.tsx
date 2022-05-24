import * as React from 'react'
import { AiOutlineMore } from 'react-icons/ai'
import { TContributors } from '../../../../../pages'
import NextImage from '../../../Contracts/NextImage'
import { TdName } from './index.styles'

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
        <TdName>
            <NextImage
                src={image}
                alt={`imagem-${name}`}
                width={50}
                height={50}
                className={'Avatar'}
            />
            <p>
                {name}
            </p>
        </TdName>
        <td>
            <p>
                {department}
            </p>
        </td>
        <td>
            <p>
                {role}
            </p>
        </td>
        <td>
            <p>
                {branch}
            </p>
        </td>
        <td>
            <p>
                {status ?? 'inactive'}
            </p>
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