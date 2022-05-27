import * as React from 'react'
import useDataCTX from '../../../../../hooks/useDataCTX/useDataCTX'
import ControlButtons from '../_ControlsButton'
import { Container } from './index.styles'

const ContributorsControl = () => {
    const { dataContributors } = useDataCTX({})
    const [ contributorsCount ] = React.useState<number>(dataContributors.length)

    return( 
        <Container>
           <span>
               <h4>
                    Mostrando {dataContributors.length} de {contributorsCount} registros
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
