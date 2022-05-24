import * as React from 'react'
import useBreadCrumb from '../../../hooks/useBreadCrumb/useBreadCrumb'
import { Flex } from './index.styles'

const BreadCrumbs = () => {
    const { breadCrumb,setBreadCrumb } = useBreadCrumb()

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