import * as React from 'react'
import { TContributors } from '../../../../../../pages'
import AvatarContributor from '../../../../AvatarContributor'
import Status from '../../../../Status'
import ButtonOptions from '../ButtonOptions'

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
        <tr className={status ?? 'inactive'}>
            <td className={status ?? 'inactive'}>
                <AvatarContributor 
                    image={image}
                    name={name}
                    size={'50px'}
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
        </tr> 
    )
}

export default ContributorsBody