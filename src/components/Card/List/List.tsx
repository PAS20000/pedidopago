import * as React from 'react'
import { TData } from '../../../../pages'


const List = ({
    agent_id,
    branch,
    department,
    image,
    name,
    role,
    status
} : TData) => {


    return(
        <li>
            {agent_id}
            {branch}
            {department}
            {image}
            {name}
            {role}
            {status}
        </li>
    )
}

export default List