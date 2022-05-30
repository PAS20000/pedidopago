import * as React from 'react'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'
import { FiTrash2 } from 'react-icons/fi'
import { TRoles } from '../../../../../pages'
import Drop from '../../../Tables/TableBodies/ButtonOptions/Drop'
import Button from '../../Button'
import { AvatarContainer, CardBody, CardContainer, ContainerInfo, ContainerInfoBody, Title, ContainerOptions } from '../index.styles'

const RoleCard = ({
   agents_quantity,
   departament,
   name
} : TRoles) => {

const [openCard, setOpenCard] = React.useState(false)
const [openDrop, setOpenDrop] = React.useState(false)

return(
    <CardBody onClick={() => setOpenCard(true)} className={openCard && 'open'}>
                {!openCard && 
                    <div>
                        <h2 className='title'>
                            Cargo
                        </h2>
                        <p className='info'>
                            {name}
                        </p>
                    </div>
                }
                {openCard && 
                    <ContainerInfo>
                        <ContainerInfoBody>
                            <div>
                                <h2 className='title'>
                                    Cargo
                                </h2>
                                <p className='info'>
                                    {name}
                                </p>
                            </div>
                            <div>
                                <h2 className='title'>
                                    Departamento
                                </h2>
                                <p className='info'>
                                    {departament}
                                </p>
                            </div>
                            <div>
                                <h2 className='title'>
                                    Celular
                                </h2>
                                <p className='info'>
                                    {agents_quantity}
                                </p>
                            </div>
                        </ContainerInfoBody>   
                    <div>
                        <Button icon={<AiOutlineFileAdd />} onClick={() => setOpenDrop(openDrop ? false : true)}>
                            Ações
                        </Button>
                        {openDrop && 
                        <ContainerOptions>
                            <Drop 
                                href={`/role/1/`}
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


export default RoleCard