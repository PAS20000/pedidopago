import * as React from 'react'
import useDataCTX from '../../../../hooks/useDataCTX/useDataCTX'
import useUXCTX from '../../../../hooks/useUXCTX/useUXCTX'
import ControlButtons from '../_ControlsButton'
import { Container, SelectContainer } from './index.styles'

const ContributorsControl = () => {
    const { sliceData, setSliceData, pages, setPages, breadCrumb, slicer } = useUXCTX()
    const { dataContributors } = useDataCTX()

    const ShowItems = () : string => {
        const contributors = dataContributors.length 
        const contributorsItemsInit = sliceData.contributors.init
        const contributorsItemsFinal = sliceData.contributors.final

        if(contributors < contributorsItemsFinal){
            return `${contributors - contributorsItemsInit + contributorsItemsFinal}` 
        }
        else {
            return `${contributorsItemsInit - ( - contributorsItemsFinal)}`
        }
    }

    const CountPages = (data:Array<Object>) => {
        const countPages = Math.ceil(data.length / slicer + 1)
    
        for (let opt = 1; opt < countPages; opt++) {
    
            const optCalc = () : number => {
                if(data.length < opt * slicer){
                    return data.length
                } else {
                    return opt * slicer
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
                        contributors:{
                            init:0,
                            final:parseInt(e.target.value)
                        },
                        
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
