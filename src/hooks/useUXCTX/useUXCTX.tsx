import * as React from 'react'
import { TUX, UXContext } from '../../context/UXContext/UXContext'

const useUXCTX = () : TUX  => {
    const { 
            globalOpen, 
            setGlobalOpen, 
            breadCrumb, 
            setBreadCrumb,
            searchValue,
            setSearchValue,
            sliceData,
            setSliceData,
        } 
    = React.useContext(UXContext)

    return {
        globalOpen, 
        setGlobalOpen, 
        breadCrumb, 
        setBreadCrumb,
        searchValue,
        setSearchValue,
        sliceData,
        setSliceData
    }
}

export default useUXCTX