import * as React from 'react'
import useDataCTX from '../../../../hooks/useDataCTX/useDataCTX'
import useUXCTX from '../../../../hooks/useUXCTX/useUXCTX'
import ControlButtons from '../_ControlsButton'
import { Container } from './index.styles'

const ContributorsControl = () => {
    const { sliceData, setSliceData } = useUXCTX()
    const { dataContributors } = useDataCTX({})
    const [options, setOptions] = React.useState<Array<number>>([])

    const ShowItems = () : string => {

        if(dataContributors.length < sliceData.final){
            return `${dataContributors.length}`
        } else {
            return `${sliceData.final}`
        }
    }

    React.useEffect(() => {
       const contributorsClientSide = JSON.parse(localStorage.contributors).length
       const slicer = 10
       for (let opt = 1; opt < Math.ceil(contributorsClientSide / slicer + 1); opt++) {

            const optCalc = () : number => {
                if(contributorsClientSide < opt * slicer){
                    return contributorsClientSide
                } else {
                    return opt * 10
                }
                
            }

            setOptions(prev => [...prev, optCalc()])
       }
      
    }, [])
    
    return( 
        <Container>
           <span>
               <h4>
                    Mostrando {ShowItems()} de {dataContributors.length} registros
               </h4>
                <select onChange={(e) =>  setSliceData({
                    ...sliceData,
                    final:parseInt(e.target.value)
                })}>
                    {options.map((opt, i) => 
                        <option key={i} value={opt}>
                            {opt}
                        </option>
                    )}
                </select>
           </span>
           <ControlButtons />
        </Container>
    )
}

export default ContributorsControl
