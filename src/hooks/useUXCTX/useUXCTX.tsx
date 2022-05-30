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
            pages,
            setPages,
            slicer,
            translate,
            setSplicaData,
            spliceData,
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
        setSliceData,
        pages,
        setPages,
        slicer,
        translate: (status:string) => translate(status),
        setSplicaData,
        spliceData,
    }
}

export default useUXCTX