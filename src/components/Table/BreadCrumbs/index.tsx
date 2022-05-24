import * as React from 'react'
import useBreadCrumbCTX from '../../../hooks/useBreadCrumbCTX/useBreadCrumbCTX'
import { Flex } from './index.styles'

const BreadCrumbs = () => {
    const { breadCrumb,setBreadCrumb } = useBreadCrumbCTX()

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
                <h3>
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
                <h3>
                    Cargos
                </h3>
            </div>
            <div className='hr' />
        </Flex>
    </>
    )
}

export default BreadCrumbs