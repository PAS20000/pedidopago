import * as React from 'react'
import { DataContext, TDataContext } from '../../context/DataContext/DataContex'


const useDataCTX = () : TDataContext => {
    const { 
        dataContributors,
        setDataContributors, 
        dataRoles, 
        setDataRoles
    } = React.useContext(DataContext)

    return {
      dataContributors,
      setDataContributors,
      dataRoles,
      setDataRoles
    }
}

export default useDataCTX