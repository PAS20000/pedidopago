import * as React from 'react'
import ControlButtons from '../_ControlsButton'
import { Container } from './index.styles'

const ContributorsControl = () => {
    
    return( 
        <Container>
           <div>
                <select>
                    <option value="10">
                        10
                    </option>
                </select>
           </div>
           <ControlButtons />
        </Container>
    )
}

export default ContributorsControl
