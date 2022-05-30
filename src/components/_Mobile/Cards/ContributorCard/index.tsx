import * as React from 'react'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'
import { FiTrash2 } from 'react-icons/fi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { TContributors } from '../../../../../pages'
import { GrUpdate } from 'react-icons/gr'
import NextImage from '../../../Contracts/NextImage'
import Status from '../../../Status'
import Drop from '../../../Tables/TableBodies/ButtonOptions/Drop'
import Button from '../../Button'
import { AvatarContainer, CardBody, CardContainer, ContainerInfo, ContainerInfoBody, Title, ContainerOptions } from '../index.styles'


type TContributorCard = {
    phone:string
}

const ContributorCard = ({
    name,
    agent_id,
    branch,
    department,
    image,
    role,
    status,
    phone
} : TContributors & TContributorCard) => {

const [openCard, setOpenCard] = React.useState(false)
const [openDrop, setOpenDrop] = React.useState(false)

return(
    <CardBody onClick={() => setOpenCard(true)} className={openCard && 'open'}>
                <Title>
                    Nome completo
                </Title>
                <CardContainer>
                    <AvatarContainer className={status ?? 'inactive'}>
                        <NextImage
                            src={image}
                            alt={`avatar-${name}`}
                            width='32px'
                            height='32px'
                            className='Avatar'
                        />
                        <p className='info'>
                            {name}
                        </p>
                    </AvatarContainer>
                    <span>
                        {openCard ?   <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                </CardContainer>
                {openCard && 
                    <ContainerInfo>
                        <ContainerInfoBody>
                            <div>
                                <h2 className='title'>
                                    Departamento
                                </h2>
                                <p className='info'>
                                    {department}
                                </p>
                            </div>
                            <div>
                                <h2 className='title'>
                                    Cargo
                                </h2>
                                <p className='info'>
                                    {role}
                                </p>
                            </div>
                            <div>
                                <h2 className='title'>
                                    Celular
                                </h2>
                                <p className='info'>
                                    {phone}
                                </p>
                            </div>
                            <div>
                                <h2 className='title'>
                                    Unidade
                                </h2>
                                <p className='info'>
                                    {branch}
                                </p>
                            </div>
                            <div>
                                <h2 className='title'>
                                    Status
                                </h2>
                                <Status 
                                    status={status}
                                />
                            </div>
                        </ContainerInfoBody>   
                    <div>
                        <Button icon={<AiOutlineFileAdd />} onClick={() => setOpenDrop(openDrop ? false : true)}>
                            Ações
                        </Button>
                        {openDrop && 
                        <ContainerOptions>
                            <Drop 
                                href={`/contributor/${agent_id}/`}
                                icon={<AiOutlineEye />}
                                ancorText='Ver colaborador'
                            />
                            <Drop 
                                href='#'
                                icon={<FiTrash2 />}
                                ancorText='Excluir'
                                className='isNotImplemented'
                            />
                        </ContainerOptions>
                        }
                    </div>
                    </ContainerInfo>
                }
            </CardBody>
    )
}


export default ContributorCard