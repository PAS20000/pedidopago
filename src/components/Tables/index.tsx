import * as React from 'react'
import Search from '../Search'
import BreadCrumbs from './BreadCrumbs'
import RolesBody from './TableBodies/RolesBody'
import ContributorsBody from './TableBodies/ContributorsBody'
import { ContainerRoles, ContainerTable, Title } from './index.styles'
import useDataCTX from '../../hooks/useDataCTX/useDataCTX'
import useUXCTX from '../../hooks/useUXCTX/useUXCTX'
import TableHead from './TableHead'
import ContributorsControl from './Tcontrols/ContributorsControl'
import ControlButtons from './Tcontrols/_ControlsButton'
import Container from '../_Layout/Container'

const Table = () => {
    const { breadCrumb, sliceData} = useUXCTX()
    const { dataContributors, dataRoles } = useDataCTX()
   

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
            <ContainerTable id='Table'>
                <thead>
                    {breadCrumb === 'Contributors' && 
                        <TableHead 
                            classHead='contributors'
                            titles={[
                                'nome completo',
                                'departamento',
                                'cargo',
                                'unidade',
                                'status',
                                ''
                            ]}
                        />
                    }
                    {breadCrumb === 'Roles' &&
                        <TableHead
                            classHead='roles'
                            titles={[
                                'cargo',
                                'departamento',
                                'colaboradores',
                                ''
                            ]}
                        />
                    }
                </thead>
                <tbody>
                    {breadCrumb === 'Contributors' &&  sliceData.contributors &&
                        dataContributors.slice(sliceData.contributors['init'], sliceData.contributors['final']).map(item => 
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
                    {breadCrumb === 'Roles' && sliceData.roles && 
                        dataRoles.slice(sliceData.roles['init'], sliceData.roles['final']).map(item => 
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
                    <ContainerRoles>
                        <ControlButtons />
                    </ContainerRoles>
                }
            </div>
        </Container>
    )
}

export default Table