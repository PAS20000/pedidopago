import * as React from 'react'

type Props = {
    userState?:'ativo' | 'inativo'
    setUserState?:Function
}

export const UserStateContext = React.createContext<Props>(null);

const UserStateProvider = ({children}) => {
  const [userState, setUserState] = React.useState<'ativo' | 'inativo'>()

   return(
        <UserStateContext.Provider value={{userState, setUserState}}>
            {children}
        </UserStateContext.Provider>
    )
}
   
export default UserStateProvider
