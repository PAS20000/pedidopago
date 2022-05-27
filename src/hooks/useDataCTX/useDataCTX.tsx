import * as React from 'react'
import { TContributors, TRoles } from '../../../pages'
import { DataContext, TDataContext } from '../../context/DataContext/DataContex'


type TUseDataCTX = {
    staticDataContributors?:TContributors[]
    staticDataRoles?:TRoles[]
}

const useDataCTX = ({
    staticDataContributors,
    staticDataRoles
} : TUseDataCTX) : TDataContext => {
    const { 
        dataContributors,
        setDataContributors, 
        dataRoles, 
        setDataRoles 
    } = React.useContext(DataContext)

    React.useEffect(() => {
        if(staticDataContributors && staticDataRoles){
            setDataContributors(staticDataContributors)
            setDataRoles(staticDataRoles)
        }
        console.log(
            'Este protótipo usa window.innerWidth/Height, portanto dê F5 se estiver usando o inspecionar elemento para testar resposividade.'
        )
    }, [])

    return {
      dataContributors,
      setDataContributors,
      dataRoles,
      setDataRoles
    }
}

export default useDataCTX