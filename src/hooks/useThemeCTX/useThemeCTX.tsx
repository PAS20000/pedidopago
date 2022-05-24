import * as React from 'react'
import { ThemeContext, TTheme } from '../../context/ThemeContext/ThemeContext'

const useThemeCTX = () : TTheme => {
    const { mode, setMode } = React.useContext(ThemeContext)


    return {
        mode,
        setMode,
    }
}

export default useThemeCTX