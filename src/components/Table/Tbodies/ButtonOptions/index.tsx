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
    
    const sizeDefault = '24px'
    return (
        <>
            <Button onClick={() => setOpen(open === false ? true : false)}>
                <FiMoreVertical size={sizeDefault}/>
            </Button>
            {open &&
                <ContainerOptions>
                    {breadCrumb === 'Contributors' && 
                        <>
                            <Button>
                                <Flex>
                                    <AiOutlineEye size={sizeDefault}/>
                                    <p>
                                        Ver colaborador
                                    </p>
                                </Flex>
                            </Button>
                            <Button className='isNotImplemented'>
                                <Flex>
                                    <FiTrash2 size={sizeDefault}/>
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
                                    <AiOutlineEye size={sizeDefault}/>
                                    <p>
                                        Ver cargo
                                    </p>
                                </Flex>
                            </Button>
                            <Button className='isNotImplemented'>
                                <Flex>
                                    <FiEdit size={sizeDefault}/>
                                    <p>
                                        Editar
                                    </p>
                                </Flex>
                            </Button>
                            <Button className='isNotImplemented'>
                                <Flex>
                                    <BsLayers size={sizeDefault}/>
                                    <p>
                                        Duplicar
                                    </p>
                                </Flex>
                            </Button>
                            <Button className='isNotImplemented'>
                                <Flex>
                                    <GrUpdate size={sizeDefault}/>
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