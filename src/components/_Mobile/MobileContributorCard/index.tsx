import * as React from 'react'
import useDataCTX from '../../../hooks/useDataCTX/useDataCTX'
import Card from '../../Container'

const MobileContributorCard = () => {
    const { dataContributors } = useDataCTX({})

    return(
         <div>
            {dataContributors.map(contributor => 
                <Card key={Math.random()}>
                    <h1>{contributor.name}</h1>
                </Card>
            )}    
         </div>
    )
}

export default MobileContributorCard