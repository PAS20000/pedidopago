import * as React from 'react'
import Container from '../_Layout/Container/index'
import Search, { TAgent } from '../Search'
import useDataCTX from '../../hooks/useDataCTX/useDataCTX'
import useUXCTX from '../../hooks/useUXCTX/useUXCTX'
import ContributorCard from './Cards/ContributorCard'
import Breads from './Cards/Breads'
import RoleCard from './Cards/RoleCard'
import { ImLoop2 } from 'react-icons/im'
import Button from './Button'
import { ContainerMedia } from './Cards/index.styles'

const Card = () => {
    const { dataContributors, dataRoles,} = useDataCTX()
    const { breadCrumb, sliceData, setSliceData, slicer } = useUXCTX()
    const [phone, setPhone] = React.useState<string>()

    React.useEffect(() => {
        const contributors : TAgent = localStorage.contributors && JSON.parse(localStorage.contributors)[0]
        const contributorKai  = contributors.phone.number

        setPhone(contributorKai ?? '123456789')
    }, [])


    const LoadMore = () : void => {
        if(breadCrumb === 'Contributors'){
            setSliceData({
                ...sliceData,
                contributors:{
                    init:0,
                    final:sliceData.contributors.final + slicer
                }
            })
        }

        if(breadCrumb === 'Roles'){
            setSliceData({
                ...sliceData,
                roles:{
                    init:0,
                    final:sliceData.roles.final + slicer
                }
            })
        }

        if(dataContributors.length < sliceData.contributors.final || dataRoles.length < sliceData.roles.final){
            alert('Não há mais dados para carregar')
        }

    }

    return(
    <ContainerMedia>
        <Container>
                <>
                    <Breads />
                    <Search />
                </>
                {breadCrumb === 'Contributors' && 
                dataContributors.slice(sliceData.contributors.init, sliceData.contributors.final).map(contributor => 
                    <ContributorCard 
                        key={contributor.agent_id}
                        name={contributor.name}
                        agent_id={contributor.agent_id}
                        branch={contributor.branch}
                        department={contributor.department}
                        image={contributor.image}
                        phone={phone}
                        role={contributor.role}
                        status={contributor.status}
                    />
                )}
                {breadCrumb === 'Roles' && dataRoles.map((role, index) => 
                    <RoleCard 
                        key={index}
                        agents_quantity={role.agents_quantity}
                        departament={role.departament}
                        name={role.name}
                    />
                )}

                <Button icon={<ImLoop2 />} onClick={LoadMore}>
                    Carregar mais
                </Button>
        </Container>
    </ContainerMedia>
    )
}


export default Card