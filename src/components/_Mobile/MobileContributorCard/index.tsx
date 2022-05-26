import * as React from 'react'
import useDataCTX from '../../../hooks/useDataCTX/useDataCTX'
import Container from '../../Container'
import NextImage from '../../Contracts/NextImage'

const MobileContributorCard = () => {
    const { dataContributors } = useDataCTX({})

    return(
         <div>
            {dataContributors.map(contributor => 
                <Container key={Math.random()} border='solid'>
                    <h3>
                        Nome completo
                    </h3>
                    <div>
                        <NextImage 
                            src={contributor.image}
                            width='50px'
                            height='50px'
                            alt={`avatar-${contributor.name}`}
                            className='Avatar'
                            layout='fixed'
                        />
                        <h4>
                            {contributor.name}
                        </h4>
                    </div>
                </Container>
            )}    
         </div>
    )
}

export default MobileContributorCard