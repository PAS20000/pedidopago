import * as React from 'react'
import { TContributors } from '../../../../../pages'
import AvatarContributor from '../../../AvatarContributor'
import Status from '../../../Status'
import ButtonOptions from '../ButtonOptions'
import { ContainerTr } from './index.styles'

const ContributorsBody = ({
    name,
    image,
    department,
    role,
    branch,
    status,
    agent_id
} : TContributors) => {
    
    return(
        <ContainerTr className={status ?? 'inactive'}>
            <td className={status ?? 'inactive'}>
                <AvatarContributor 
                    image={image}
                    name={name}
                    size={'32px'}
                />
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
            <td>
                <Status status={status}/>
            </td>
            <td>
                <ButtonOptions id={agent_id}/>
            </td>
        </ContainerTr> 
    )
}

export default ContributorsBody