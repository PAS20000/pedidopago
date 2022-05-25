import * as React from 'react'
import { FiMoreVertical, FiTrash2, FiEdit } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { Button, ContainerOptions, Flex, Grid } from './indext.styles'
import { BsLayers } from 'react-icons/bs'
import { GrUpdate } from 'react-icons/gr'
import useBreadCrumbCTX from '../../../../hooks/useBreadCrumbCTX/useBreadCrumbCTX'
import useUXCTX from '../../../../hooks/useUXCTX'
import useId from '../../../../hooks/useId/useId'



const ButtonOptions = () => {
    const { globalOpen, setGlobalOpen } = useUXCTX()
    const { breadCrumb } = useBreadCrumbCTX()
    const [ localOpen, setLocalOpen ] = React.useState<boolean>(false)
    const { sequencial } = useId('myId')

    const Open = () => {
       setLocalOpen(prev => prev === false ? true : false)
    }
   
    console.log(localOpen)

    return (
        <>
            <Button onClick={Open}>
                <span>
                    <FiMoreVertical />
                </span>
            </Button>
            {localOpen &&
                <ContainerOptions>
                    {breadCrumb === 'Contributors' && 
                        <Grid>
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
                        </Grid>
                    }
                    {breadCrumb === 'Roles' &&  
                        <Grid>
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
                        </Grid>
                    }
                </ContainerOptions>
            }
        </>
    )
}

export default ButtonOptions