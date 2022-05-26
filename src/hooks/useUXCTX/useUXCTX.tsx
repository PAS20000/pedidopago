import * as React from 'react'
import { TUX, UXContext } from '../../context/UXContext/UXContext'

const useUXCTX = () : TUX  => {
    const { 
            globalOpen, 
            setGlobalOpen, 
            breadCrumb, 
            setBreadCrumb 
        } = React.useContext(UXContext)

    
    return {
        globalOpen, 
        setGlobalOpen, 
        breadCrumb, 
        setBreadCrumb 
    }
}

export default useUXCTX