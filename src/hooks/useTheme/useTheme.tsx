import * as React from 'react'
import { ThemeContext } from '../../context/ThemeContext/ThemeContext'

const useTheme = () => {
    const { mode, setMode } = React.useContext(ThemeContext)


    return {
        mode,
        setMode
    }
}

export default useTheme