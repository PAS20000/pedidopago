import * as React from 'react'
import useDataCTX from '../../../hooks/useDataCTX/useDataCTX'
import Container from '../../Container'
import NextImage from '../../Contracts/NextImage'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { AvatarName, ContainerInfo, ContainerStatus, Flex, Grid, Title } from './index.styles'
import Status from '../../Status'

const MobileContributorCard = () => {
    const { dataContributors } = useDataCTX({})
    const [ open, setOpen ] = React.useState<boolean>(false)

    return(
         <div onClick={() => setOpen(open ? false : true)}>
            {dataContributors.map(contributor => 
                <Container
                    key={Math.random()} 
                    border='solid'
                >
                    <Flex>
                        <article>
                            <AvatarName>
                                <Title>
                                    Nome completo
                                </Title>
                                <div>
                                    <NextImage 
                                        src={contributor.image}
                                        width='50px'
                                        height='50px'
                                        alt={`avatar-${contributor.name}`}
                                        className={`Avatar ${contributor.status}`}
                                        layout='fixed'
                                    />
                                    <h5>
                                        {contributor.name}
                                    </h5>
                                </div>
                            </AvatarName>
                            {open && 
                                <ContainerInfo>
                                    <div>
                                       <span>
                                            <h6>
                                                Departamento
                                            </h6>
                                            <h6>
                                                {contributor.department}
                                            </h6>
                                        </span>
                                        <span>
                                            <h6>
                                                Cargo
                                            </h6>
                                            <h6>
                                                {contributor.role}
                                            </h6>
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            <h6>
                                                Phone
                                            </h6>
                                            <h6>
                                                123456789
                                            </h6>
                                        </span>
                                        <span>
                                            <h6>
                                                Unidade
                                            </h6>
                                            <h6>
                                                {contributor.branch}
                                            </h6>
                                        </span>
                                    </div>
                                    <ContainerStatus>
                                        <h6>
                                            Status
                                        </h6>
                                        <Status status={contributor.status}/>
                                    </ContainerStatus>
                                </ContainerInfo> 
                            }
                        </article>
                        <div>
                            {open ? 
                                <IoIosArrowUp /> 
                                    : 
                                <IoIosArrowDown />
                            }
                        </div>
                    </Flex>
                </Container>
            )}    
         </div>
    )
}

export default MobileContributorCard