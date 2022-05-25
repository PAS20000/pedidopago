import * as React from 'react'

type TUserState = 'active' | 'inactive'

type Props = {
    userState?:TUserState
    setUserState?:React.Dispatch<React.SetStateAction<TUserState>>
}

type TUserStateProvider = {
    children:React.ReactNode
}

export const UserStateContext = React.createContext<Props>(null);

const UserStateProvider = ({
    children
} : TUserStateProvider) => {
  const [userState, setUserState] = React.useState<TUserState>()

   return(
        <UserStateContext.Provider value={{userState, setUserState}}>
            {children}
        </UserStateContext.Provider>
    )
}
   
export default UserStateProvider
