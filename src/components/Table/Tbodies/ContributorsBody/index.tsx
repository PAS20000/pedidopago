import * as React from 'react'
import { TContributors } from '../../../../../pages'
import NextImage from '../../../Contracts/NextImage'
import ButtonOptions from '../ButtonOptions'
import { Flex, LabelTd } from './index.styles'

const ContributorsBody = ({
    name,
    image,
    department,
    role,
    branch,
    status
} : TContributors) => {

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
    <tr className={status ?? 'inactive'}>
        <td className={status ?? 'inactive'}>
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
        <td className={status ?? 'inactive'}>
            <p>
                {department}
            </p>
        </td>
        <td className={status ?? 'inactive'}>
            <p>
                {role}
            </p>
        </td>
        <td className={status ?? 'inactive'}>
            <p>
                {branch}
            </p>
        </td>
        <LabelTd>
            <p className={(status ?? 'inactive')}>
                {translate()}
            </p>
        </LabelTd>
        <td>
            <ButtonOptions />
        </td>
    </tr>
    )
}

export default ContributorsBody