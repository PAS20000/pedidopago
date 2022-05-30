import * as React from 'react'
import { FiMoreVertical, FiTrash2, FiEdit } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { ContainerOptions } from './indext.styles'
import { BsLayers } from 'react-icons/bs'
import { GrUpdate } from 'react-icons/gr'
import useUXCTX from '../../../../hooks/useUXCTX/useUXCTX'
import Drop from './Drop'
import { Button } from './Drop/index.styles'

type TButtonOptions = {
    id:number
}

const ButtonOptions = ({
    id
} : TButtonOptions) => {
    const { breadCrumb } = useUXCTX()
    const [ localOpen, setLocalOpen ] = React.useState<boolean>(false)
    
    const OpenClose = () => {
        localOpen ?  setLocalOpen(false) : setLocalOpen(true)
    }

    return (
        <>
            <Button onClick={OpenClose}>
                <span>
                    <FiMoreVertical />
                </span>
            </Button>
            {localOpen &&
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