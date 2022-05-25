import * as React from 'react'
import { TContributors, TRoles } from '../../../pages'
import Search from './Search'
import BreadCrumbs from './BreadCrumbs'
import RolesBody from './Tbodies/RolesBody'
import RolesHead from './Theaders/RolesHead'
import ContributorsBody from './Tbodies/ContributorsBody'
import ContributorsHead from './Theaders/ContributorsHead'
import useBreadCrumbCTX from '../../hooks/useBreadCrumbCTX/useBreadCrumbCTX'
import { ContainerTable, Title } from './index.styles'
import ContributorsControl from './Tcontrols/ContributorsControl'
import RolesControl from './Tcontrols/RolesControl'

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

    return(
        <>
            <BreadCrumbs />
            <Search 
                setSearchContributors={setSearchContributors}
                setSearchRoles={setSearchRoles}
            />
            {breadCrumb === 'Contributors' &&
                <Title>
                    Listagem de colaboradores
                </Title>
            }
            {breadCrumb === 'Roles' &&
                <Title>
                    Listagem de cargos
                </Title>
            }
            <ContainerTable>
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
            </ContainerTable>
            <div>
                {breadCrumb === 'Contributors' && 
                    <ContributorsControl />
                }
                {breadCrumb === 'Roles' && 
                    <RolesControl />
                }
            </div>
        </>
    )
}

export default Table