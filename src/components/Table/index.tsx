import * as React from 'react'
import { TEmployees, TRoles } from '../../../pages'
import Search from './Search'
import BreadCrumbs from './BreadCrumbs'
import useBreadCrumb from '../../hooks/useBreadCrumb/useBreadCrumb'
import EmployeesHead from './Theaders/EmployessHead'
import EmployeesBody from './Tbodies/EmployeesBody'
import RolesBody from './Tbodies/RolesBody'
import RolesHead from './Theaders/RolesHead'

type TTable = {
    dataEmployees:TEmployees[]
    dataRoles:TRoles[]
}

const Table = ({
    dataEmployees,
    dataRoles,
} : TTable) => {
    const { breadCrumb } = useBreadCrumb()

    const translate = () : string => {
        if(breadCrumb === 'Employees'){
            return 'colaboradores'
        }
        if(breadCrumb === 'Roles'){
            return 'cargos'
        }
    }

    return(
        <>
            <BreadCrumbs />
            <Search />
            <h2>
               Listagem de {translate()}
            </h2>
            <table style={{width:'100%'}}>
                <thead>
                    {breadCrumb === 'Employees' && 
                        <EmployeesHead />
                    }
                    {breadCrumb === 'Roles' &&
                        <RolesHead />
                    }
                </thead>
                <tbody>
                    {breadCrumb === 'Employees' && dataEmployees.map(item => 
                        <EmployeesBody 
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
                        <RolesBody 
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