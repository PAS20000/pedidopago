import * as React from 'react'
import { AiOutlineMore } from 'react-icons/ai'
import { TContributors } from '../../../../../pages'
import NextImage from '../../../Contracts/NextImage'
import { Flex } from './index.styles'

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
            <Flex>
                <NextImage
                    src={image}
                    alt={`imagem-${name}`}
                    width={40}
                    height={40}
                    className={'Avatar'}
                />
                <p>
                    {name}
                </p>
            </Flex>
        </td>
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