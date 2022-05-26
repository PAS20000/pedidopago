import * as React from 'react'
import { TUX, UXContext } from '../../context/UXContext/UXContext'

const useUXCTX = () : TUX  => {
    const { 
            globalOpen, 
            setGlobalOpen, 
            breadCrumb, 
            setBreadCrumb,
            searchValue,
            setSearchValue
        } 
    = React.useContext(UXContext)

    return {
        globalOpen, 
        setGlobalOpen, 
        breadCrumb, 
        setBreadCrumb,
        searchValue,
        setSearchValue
    }
}

export default useUXCTX