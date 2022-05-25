import * as React from 'react'
import { TUX, UXContext } from '../../context/UXContext/UXContext'

const useUXCTX = () : TUX => {
    const { globalOpen, setGlobalOpen } = React.useContext(UXContext)


    return {
        globalOpen, 
        setGlobalOpen 
    }
}

export default useUXCTX