import * as React from 'react'
import useUXCTX from '../../../hooks/useUXCTX/useUXCTX'
import { Flex } from './index.styles'

const BreadCrumbs = () => {
    const { breadCrumb, setBreadCrumb } = useUXCTX()

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
            <div className='default end'>
                <h3>
                    &nbsp;
                </h3>
            </div>
        </Flex>
    </>
    )
}

export default BreadCrumbs