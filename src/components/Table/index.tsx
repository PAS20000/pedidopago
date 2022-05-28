import * as React from 'react'
import Search from '../Search'
import BreadCrumbs from './BreadCrumbs'
import RolesBody from './TableBodies/RolesBody'
import ContributorsBody from './TableBodies/ContributorsBody'
import { Container, ContainerTable, Title } from './index.styles'
import ContributorsControl from './Tcontrols/ContributorsControl'
import RolesControl from './Tcontrols/RolesControl'
import useDataCTX from '../../hooks/useDataCTX/useDataCTX'
import useUXCTX from '../../hooks/useUXCTX/useUXCTX'
import TableHead from './TableHead'

const Table = () => {
    const { breadCrumb } = useUXCTX()
    const { dataContributors, dataRoles } = useDataCTX({})

    return(
        <Container>
            <BreadCrumbs />
            <Search />
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
                        <TableHead 
                            titles={[
                                'nome completo',
                                'departamento',
                                'cargo',
                                'unidade',
                                'status',
                            ]}
                        />
                    }
                    {breadCrumb === 'Roles' &&
                        <TableHead 
                            titles={[
                                'cargo',
                                'departamento',
                                'colaboradores',
                            ]}
                        />
                    }
                </thead>
                <tbody >
                    {breadCrumb === 'Contributors' && dataContributors.map(item => 
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
                    {breadCrumb === 'Roles' && dataRoles.map(item => 
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
        </Container>
    )
}

export default Table