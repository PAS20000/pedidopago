import * as React from 'react'
import { TContributors } from '../../../pages'
import Container from '../_Layout/Container/index'
import Search, { TAgent } from '../Search'
import useDataCTX from '../../hooks/useDataCTX/useDataCTX'
import useUXCTX from '../../hooks/useUXCTX/useUXCTX'
import ContributorCard from './Cards/ContributorCard'
import Field from './Cards/Breads'
import Breads from './Cards/Breads'

const Card = () => {
    const { dataContributors } = useDataCTX({})
    const { breadCrumb } = useUXCTX()
    const [phone, setPhone] = React.useState<string>()

    React.useEffect(() => {
        const number = '123456789'
        
        setPhone(number)
    }, [])

    return(
    <Container>
        <div>
            <Breads />
            <Search />
        </div>
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

    </Container>
    )
}


export default Card