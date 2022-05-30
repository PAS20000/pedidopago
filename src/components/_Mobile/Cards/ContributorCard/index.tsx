import * as React from 'react'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'
import { FiTrash2 } from 'react-icons/fi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { TContributors } from '../../../../../pages'
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

const [open, setOpen] = React.useState(false)
const [openDrop, setOpenDrop] = React.useState(false)
return(
    <CardBody key={agent_id}>
                <Title>
                    Nome completo
                </Title>
                <CardContainer onClick={() => setOpen(true)}>
                    <AvatarContainer>
                        <NextImage
                            src={image}
                            alt={`avatar-${name}`}
                            width='32px'
                            height='32px'
                            className='Avatar'
                        />
                        <p>
                            {name}
                        </p>
                    </AvatarContainer>
                    <span>
                        {open ? <IoIosArrowDown /> : <IoIosArrowUp /> }
                    </span>
                </CardContainer>
                {open && 
                    <ContainerInfo>
                        <ContainerInfoBody>
                            <div>
                                <h2>
                                    Departamento
                                </h2>
                                <p>
                                    {department}
                                </p>
                            </div>
                            <div>
                                <h2>
                                    Cargo
                                </h2>
                                <p>
                                    {role}
                                </p>
                            </div>
                            <div>
                                <h2>
                                    Celular
                                </h2>
                                <p>
                                    {phone}
                                </p>
                            </div>
                            <div>
                                <h2>
                                    Unidade
                                </h2>
                                <p>
                                    {branch}
                                </p>
                            </div>
                            <div>
                                <h2>
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