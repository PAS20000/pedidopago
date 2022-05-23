import * as React from 'react'

type Props = {
    userState?:'active' | 'inactive'
    setUserState?:Function
}

export const UserStateContext = React.createContext<Props>(null);

const UserStateProvider = ({children}) => {
  const [userState, setUserState] = React.useState<'active' | 'inactive'>()

   return(
        <UserStateContext.Provider value={{userState, setUserState}}>
            {children}
        </UserStateContext.Provider>
    )
}
   
export default UserStateProvider
