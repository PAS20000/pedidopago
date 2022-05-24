import * as React from 'react'
import { UserStateContext } from '../../context/UserStateContext/UserStateContext'

const useUserStateCTX = () => {
    const { userState, setUserState } = React.useContext(UserStateContext)


    return {
        userState,
        setUserState
    }
}

export default useUserStateCTX