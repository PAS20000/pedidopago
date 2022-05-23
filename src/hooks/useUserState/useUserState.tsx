import * as React from 'react'
import { UserStateContext } from '../../context/UserStateContext/UserStateContext'

const useUserState = () => {
    const { userState, setUserState } = React.useContext(UserStateContext)


    return {
        userState,
        setUserState
    }
}

export default useUserState