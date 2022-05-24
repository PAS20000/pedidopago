import * as React from 'react'
import useBreadCrumbCTX from '../../../hooks/useBreadCrumbCTX/useBreadCrumbCTX'
import { Contributors, Flex, Roles } from './index.styles'

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
                <Contributors>
                    Colaboradores
                </Contributors>
            </div>
            <div 
                onClick={() => setBreadCrumb('Roles')} 
                className={breadCrumb === 'Roles' ? 
                    'select'
                    :
                    'default'
                }
            >
                <Roles>
                    Cargos
                </Roles>
            </div>
            <div className='hr' />
        </Flex>
    </>
    )
}

export default BreadCrumbs