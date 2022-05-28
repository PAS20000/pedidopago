import * as React from 'react'
import useDataCTX from '../../../../hooks/useDataCTX/useDataCTX'
import useUXCTX from '../../../../hooks/useUXCTX/useUXCTX'
import ControlButtons from '../_ControlsButton'
import { Container, SelectContainer } from './index.styles'

const ContributorsControl = () => {
    const { sliceData, setSliceData, pages, setPages, breadCrumb } = useUXCTX()
    const { dataContributors } = useDataCTX({})

    const ShowItems = () : string => {

        if(dataContributors.length < sliceData.final){
            return `${dataContributors.length}`
        }
        else {
            return `${sliceData.final}`
        }
    }

    const CountPages = (data:Array<Object>) => {
        const countPages = Math.ceil(data.length / 10 + 1)
    
        for (let opt = 1; opt < countPages; opt++) {
    
            const optCalc = () : number => {
                if(data.length < opt * 10){
                    return data.length
                } else {
                    return opt * 10
                }
                
            }
     
            setPages(prev => [...prev, optCalc()])
       }
    }

    React.useEffect(() => {
     if(breadCrumb === 'Contributors'){
         CountPages(JSON.parse(localStorage.contributors))
     }
     if(breadCrumb === 'Roles'){
         CountPages(JSON.parse(localStorage.roles))
     }

     return () => {
        setSliceData({
            init:0,
            final:10
        })
        
        setPages([])
    }
    
    }, [breadCrumb])
    return( 
        <Container>
           <SelectContainer>
                <h4>
                    Mostrando {ShowItems()} de {dataContributors.length} registros
                </h4>
                <select onChange={(e) =>  setSliceData({
                        ...sliceData,
                        final:parseInt(e.target.value)
                    })}>
                    {pages.map((opt, i) => 
                      <option key={i} value={opt}>
                        {opt} 
                      </option>
                    )}
                </select>
            </SelectContainer> 
           <ControlButtons />
        </Container>
    )
}

export default ContributorsControl
