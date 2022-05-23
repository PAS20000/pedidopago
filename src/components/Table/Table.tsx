import * as React from 'react'
import { TEmployees, TRoles } from '../../../pages'
import NextImage from '../Contracts/NextImage/NextImage'
import { AiOutlineMore } from 'react-icons/ai'
import Search from './Search/Search'
import BreadCrumbs from './BreadCrumbs/BreadCrumbs'
import useBreadCrumb from '../../hooks/useBreadCrumb/useBreadCrumb'
import Roles from './Tbodies/Roles'
import Employees from './Tbodies/Employees'

type TTable = {
    children?:React.ReactNode
    dataEmployees:TEmployees[]
    dataRoles:TRoles[]
    title?:string
}

const Table = ({
    children,
    dataEmployees,
    dataRoles,
    title,
} : TTable) => {
    const { breadCrumb } = useBreadCrumb()

    return(
        <>
            <BreadCrumbs />
            <Search />
            <h2>
                {title}
            </h2>
            <table style={{width:'100%'}}>
                {children}
                <tbody>
                    {breadCrumb === 'Employees' && dataEmployees.map(item => 
                        <Employees 
                            key={item.agent_id}
                            name={item.name}
                            agent_id={item.agent_id}
                            image={item.image}
                            branch={item.branch}
                            department={item.department}
                            role={item.role}
                            status={item.status}
                        />)
                    }
                    {breadCrumb === 'Roles' && dataRoles.map(item => 
                        <Roles 
                            key={Math.random()} 
                            agents_quantity={item.agents_quantity}
                            departament={item.departament}
                            name={item.name}
                        />)
                    }
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </>
    )
}

export default Table