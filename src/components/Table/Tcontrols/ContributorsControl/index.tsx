import * as React from 'react'
import useDataCTX from '../../../../hooks/useDataCTX/useDataCTX'
import ControlButtons from '../_ControlsButton'
import { Container } from './index.styles'

const ContributorsControl = () => {
    const { dataContributors } = useDataCTX({})

    return( 
        <Container>
           <span>
               <h4>
                    Mostrando {dataContributors.length} de {dataContributors.length} registros
               </h4>
                <select>
                    <option value="10">
                        10
                    </option>
                </select>
           </span>
           <ControlButtons />
        </Container>
    )
}

export default ContributorsControl
