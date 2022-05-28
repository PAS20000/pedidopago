import * as React from 'react'
import { FiMoreVertical, FiTrash2, FiEdit } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { ContainerOptions } from './indext.styles'
import { BsLayers } from 'react-icons/bs'
import { GrUpdate } from 'react-icons/gr'
import useId from '../../../../hooks/useId/useId'
import NextLink from '../../../Contracts/NextLink'
import useUXCTX from '../../../../hooks/useUXCTX/useUXCTX'
import Drop from './Drop'
import { Button } from './Drop/index.styles'

type TButtonOptions = {
    id:number
}

const ButtonOptions = ({
    id
} : TButtonOptions) => {
    const { breadCrumb, globalOpen, setGlobalOpen, setBreadCrumb } = useUXCTX()
    const [ localOpen, setLocalOpen ] = React.useState<boolean>(false)

    const Open = () => {
        setLocalOpen(localOpen === false ? true : false)
    }

    return (
        <>
            <Button onClick={Open}>
                <span>
                    <FiMoreVertical />
                </span>
            </Button>
            {localOpen && globalOpen &&
                <ContainerOptions>
                    {breadCrumb === 'Contributors' && 
                        <>
                            <Drop 
                                href={`/contributor/${id}/`}
                                icon={<AiOutlineEye />}
                                ancorText='Ver colaborador'
                            />
                            <Drop 
                                href='#'
                                icon={<FiTrash2 />}
                                ancorText='Excluir'
                                className='isNotImplemented'
                            />
                        </>
                    }
                    {breadCrumb === 'Roles' &&
                    <>
                            <Drop
                                href={`/role/${id}/`}
                                icon={<AiOutlineEye />}
                                ancorText='Ver cargo'
                            />
                            <Drop 
                                href={'#'}
                                icon={<FiEdit />}
                                ancorText='Editar'
                                className='isNotImplemented'
                            />
                            <Drop 
                                href={'#'}
                                icon={<BsLayers />}
                                ancorText='Duplicar'
                                className='isNotImplemented'
                            />
                            <Drop 
                                href={'#'}
                                icon={<GrUpdate />}
                                ancorText='Excluir'
                                className='isNotImplemented'
                            />
                    </>
                    }
                </ContainerOptions>
            }
        </>
    )
}

export default ButtonOptions