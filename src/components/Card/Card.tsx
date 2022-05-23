import * as React from 'react'
import { TData } from '../../../pages'
import NextImage from '../Contracts/NextImage/NextImage'

const Card = ({
    agent_id,
    branch,
    department,
    image,
    name,
    role,
    status
} : TData) => {


    return(
        <div>
           <ul>
                <li>
                    <NextImage src={image} width={'50px'} height={'50px'} alt={`imagem-${name}`}/>
                    {agent_id}
                    {branch}
                    {department}
                    {name}
                    {role}
                    {status}
                </li>
           </ul>
        </div>
    )
}

export default Card