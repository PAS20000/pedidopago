import * as React from 'react'
import useBreadCrumb from '../../../hooks/useBreadCrumb/useBreadCrumb'

const BreadCrumbs = () => {
    const { setBreadCrumb } = useBreadCrumb()

    return(
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <h3 onClick={() => setBreadCrumb('Employees')}>
                Colaboradores
            </h3>
            <h3 onClick={() => setBreadCrumb('Roles')}>
                Cargos
            </h3>
        </div>
    )
}

export default BreadCrumbs