import * as React from 'react'
import { FiMoreVertical, FiTrash2, FiEdit } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { Button, ContainerOptions, Flex, Grid } from './indext.styles'
import { BsLayers } from 'react-icons/bs'
import { GrUpdate } from 'react-icons/gr'
import useBreadCrumbCTX from '../../../../hooks/useBreadCrumbCTX/useBreadCrumbCTX'
import useId from '../../../../hooks/useId/useId'
import NextLink from '../../../Contracts/NextLink'

type TButtonOptions = {
    id:number
}

const ButtonOptions = ({
    id
}) => {
    const { breadCrumb } = useBreadCrumbCTX()
    const [ localOpen, setLocalOpen ] = React.useState<boolean>(false)
    const { sequencial } = useId('options')

    const Open = () => {
       setLocalOpen(prev => prev === false ? true : false)
    }
    
    return (
        <>
            <Button onClick={Open}>
                <span>
                    <FiMoreVertical />
                </span>
            </Button>
            {localOpen &&
                <ContainerOptions onMouseLeave={() => setLocalOpen(false)}>
                    {breadCrumb === 'Contributors' && 
                        <Grid id={sequencial}>
                            <Button>
                                <Flex>
                                    <span>
                                        <AiOutlineEye />
                                    </span>
                                    <NextLink href={`/contributor/${id}/`} target={'_self'}>
                                        <p>
                                            Ver colaborador
                                        </p>    
                                    </NextLink>
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
                        <Grid id={sequencial}>
                            <Button>
                                <Flex>
                                    <span>
                                        <AiOutlineEye />
                                    </span>
                                    <NextLink href={`/role/${id}/`} target={'_self'}>
                                        <p>
                                            Ver cargo
                                        </p>    
                                    </NextLink>
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