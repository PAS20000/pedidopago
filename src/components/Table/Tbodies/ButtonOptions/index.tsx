import * as React from 'react'
import { FiMoreVertical, FiTrash2, FiEdit } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { Button, ContainerOptions, Flex } from './indext.styles'
import { BsLayers } from 'react-icons/bs'
import { GrUpdate } from 'react-icons/gr'
import useBreadCrumbCTX from '../../../../hooks/useBreadCrumbCTX/useBreadCrumbCTX'

const ButtonOptions = () => {
    const [open, setOpen] = React.useState<boolean>(false)
    const { breadCrumb } = useBreadCrumbCTX()
    return (
        <>
            <Button onClick={() => setOpen(open === false ? true : false)}>
                <span>
                    <FiMoreVertical />
                </span>
            </Button>
            {open &&
                <ContainerOptions>
                    {breadCrumb === 'Contributors' && 
                        <>
                            <Button>
                                <Flex>
                                    <span>
                                        <AiOutlineEye />
                                    </span>
                                    <p>
                                        Ver colaborador
                                    </p>
                                </Flex>
                            </Button>
                            <Button className='isNotImplemented'>
                                <Flex>
                                    <span>
                                        <FiTrash2 />
                                    </span>
                                    <p>
                                        Excluir
                                    </p>
                                </Flex>
                            </Button>
                        </>
                    }
                    {breadCrumb === 'Roles' &&  
                        <>
                            <Button>
                                <Flex>
                                    <span>
                                        <AiOutlineEye />
                                    </span>
                                    <p>
                                        Ver cargo
                                    </p>
                                </Flex>
                            </Button>
                            <Button className='isNotImplemented'>
                                <Flex>
                                    <span>
                                        <FiEdit />
                                    </span>
                                    <p>
                                        Editar
                                    </p>
                                </Flex>
                            </Button>
                            <Button className='isNotImplemented'>
                                <Flex>
                                    <span>
                                        <BsLayers />
                                    </span>
                                    <p>
                                        Duplicar
                                    </p>
                                </Flex>
                            </Button>
                            <Button className='isNotImplemented'>
                                <Flex>
                                    <span>
                                        <GrUpdate />
                                    </span>
                                    <p>
                                        Excluir
                                    </p>
                                </Flex>
                            </Button>
                        </>
                    }
                </ContainerOptions>
            }
        </>
    )
}

export default ButtonOptions