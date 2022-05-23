import * as React from 'react'
import useBreadCrumb from '../../../hooks/useBreadCrumb/useBreadCrumb'

const Search = () => {
    const { breadCrumb } = useBreadCrumb()

    return(
        <>
            {breadCrumb === 'Employees' &&
                <input type="text" placeholder='Pesquise por nome ou cpf'/>
            }
            {breadCrumb === 'Roles' && 
                <input type="text" placeholder='Pesquise por cargo'/>
            }
        </>
    )
}

export default Search