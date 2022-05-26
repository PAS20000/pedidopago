import * as React from 'react'

const ContributorsHead = () => {
    
    return(
        <tr>
            <th>
                <h4 className='first'>
                    Nome Completo
                </h4>
            </th>
            <th>
                <h4>
                    Departamento
                </h4>
            </th>
            <th>
                <h4>
                    Cargo
                </h4>
            </th>
            <th>
                <h4>
                    Unidade
                </h4>
            </th>
            <th>
                <h4>
                    Status
                </h4>
            </th>
            <th>
                <h4 className='last'>
                    &nbsp;
                </h4>
            </th>
        </tr>   
    )
}

export default ContributorsHead