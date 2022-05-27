import * as React from 'react'
import useDataCTX from '../../../hooks/useDataCTX/useDataCTX'
import Container from '../../Container'
import NextImage from '../../Contracts/NextImage'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Flex, Title } from './index.styles'

const MobileContributorCard = () => {
    const { dataContributors } = useDataCTX({})

    return(
         <div>
            {dataContributors.map(contributor => 
                <Container key={Math.random()} border='solid'>
                    <Title>
                        Nome completo
                    </Title>
                    <Flex>
                        <Flex>
                            <NextImage 
                                src={contributor.image}
                                width='50px'
                                height='50px'
                                alt={`avatar-${contributor.name}`}
                                className='Avatar'
                                layout='fixed'
                            />
                            <h5>
                                {contributor.name}
                            </h5>
                        </Flex>
                        <div>
                            <IoIosArrowDown />
                            <IoIosArrowUp />
                        </div>
                    </Flex>
                </Container>
            )}    
         </div>
    )
}

export default MobileContributorCard