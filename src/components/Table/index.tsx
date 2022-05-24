import * as React from 'react'
import { TContributors, TRoles } from '../../../pages'
import Search from './Search'
import BreadCrumbs from './BreadCrumbs'
import RolesBody from './Tbodies/RolesBody'
import RolesHead from './Theaders/RolesHead'
import RolesFooter from './Tfooters/RolesFooter'
import ContributorsBody from './Tbodies/ContributorsBody'
import ContributorsFooter from './Tfooters/ContributorsFooter'
import ContributorsHead from './Theaders/ContributorsHead'
import useBreadCrumbCTX from '../../hooks/useBreadCrumbCTX/useBreadCrumbCTX'

type TTable = {
    dataContributors:TContributors[]
    dataRoles:TRoles[]
}

const Table = ({
    dataContributors,
    dataRoles,
} : TTable) => {
    const { breadCrumb } = useBreadCrumbCTX()
    const [searchContributors, setSearchContributors] = React.useState<TContributors[]>(dataContributors)
    const [searchRoles, setSearchRoles] = React.useState<TRoles[]>(dataRoles)

    const translate = () : string => {
        if(breadCrumb === 'Contributors'){
            return 'colaboradores'
        }
        if(breadCrumb === 'Roles'){
            return 'cargos'
        }
    }

    return(
        <>
            <BreadCrumbs />
            <Search 
                setSearchContributors={setSearchContributors}
                setSearchRoles={setSearchRoles}
            />
            <h2>
               Listagem de {translate()}
            </h2>
            <table style={{width:'100%'}}>
                <thead>
                    {breadCrumb === 'Contributors' && 
                        <ContributorsHead />
                    }
                    {breadCrumb === 'Roles' &&
                        <RolesHead />
                    }
                </thead>
                <tbody>
                    {breadCrumb === 'Contributors' && searchContributors.map(item => 
                        <ContributorsBody 
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
                    {breadCrumb === 'Roles' && searchRoles.map(item => 
                        <RolesBody 
                            key={Math.random()} 
                            agents_quantity={item.agents_quantity}
                            departament={item.departament}
                            name={item.name}
                        />)
                    }
                </tbody>
                <tfoot>
                    {breadCrumb === 'Contributors' && 
                        <ContributorsFooter />
                    }
                    {breadCrumb === 'Roles' && 
                        <RolesFooter />
                    }
                </tfoot>
            </table>
        </>
    )
}

export default Table