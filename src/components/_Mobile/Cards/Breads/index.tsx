import * as React from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import useUXCTX from '../../../../hooks/useUXCTX/useUXCTX'
import { ContainerBread } from './index.styles'


const Breads = () => {

    const { setBreadCrumb, breadCrumb } = useUXCTX()
    const [open, setOpen] = React.useState(false)

    const translateBreadCrumb = () => {
        if(breadCrumb === 'Contributors'){
            return 'Colaboradores'
        }
        if(breadCrumb === 'Roles'){
            return 'Cargos'
        }
        
        else {
            return 'Categoris'
        }
    }

    return(
        <ContainerBread>
            <div>
                <button onClick={() => setOpen(open ? false : true)}>
                    {translateBreadCrumb()}
                    <span>
                        <FiMoreVertical />
                    </span>
                </button>
            </div>
            {open &&
                <div className='categorias' onClick={() => setOpen(false)}>
                    <h2>
                        Categorias
                    </h2>
                    <div onClick={() => setBreadCrumb('Contributors')} className='selectBread'>
                        Colaboradores
                    </div>
                    <div onClick={() => setBreadCrumb('Roles')}  className='selectBread'>
                        Cargos
                    </div>
                </div>
            }
        </ContainerBread>
    )
}

export default Breads