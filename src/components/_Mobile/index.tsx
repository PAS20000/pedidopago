import * as React from 'react'
import Container from '../_Layout/Container/index'
import Search, { TAgent } from '../Search'
import useDataCTX from '../../hooks/useDataCTX/useDataCTX'
import useUXCTX from '../../hooks/useUXCTX/useUXCTX'
import ContributorCard from './Cards/ContributorCard'
import Breads from './Cards/Breads'
import RoleCard from './Cards/RoleCard'

const Card = () => {
    const { dataContributors, dataRoles } = useDataCTX()
    const { breadCrumb } = useUXCTX()
    const [phone, setPhone] = React.useState<string>()

    React.useEffect(() => {
        const contributors : TAgent = JSON.parse(localStorage.contributors)[0]
        const contributorKai  = contributors.phone.number

        setPhone(contributorKai)
    }, [])

    return(
    <Container>
        <>
            <Breads />
            <Search />
        </>
        {breadCrumb === 'Contributors' && dataContributors.map(contributor => 
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
    </Container>
    )
}


export default Card