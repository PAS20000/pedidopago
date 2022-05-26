import * as React from 'react'
import useUXCTX from '../../../hooks/useUXCTX/useUXCTX'
import { Flex } from './index.styles'

const BreadCrumbs = () => {
    const { breadCrumb,setBreadCrumb } = useUXCTX()

    return(
    <>
        <Flex>
            <div 
                onClick={() => setBreadCrumb('Contributors')} 
                className={breadCrumb === 'Contributors' ? 
                    'select'
                    :
                    'default'
                }
            >
                <h3 className='contributors'>
                    Colaboradores
                </h3>
            </div>
            <div 
                onClick={() => setBreadCrumb('Roles')} 
                className={breadCrumb === 'Roles' ? 
                    'select'
                    :
                    'default'
                }
            >
                <h3 className='roles'>
                    Cargos
                </h3>
            </div>
            <div className='hr' />
        </Flex>
    </>
    )
}

export default BreadCrumbs