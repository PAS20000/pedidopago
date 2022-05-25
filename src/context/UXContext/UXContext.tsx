import * as React from 'react'

export type TUX = {
    globalOpen?:boolean
    setGlobalOpen?:React.Dispatch<React.SetStateAction<boolean>>
}

type TUXProvider = {
    children:React.ReactNode
}

export const UXContext = React.createContext<TUX>(null);

const UXProvider = ({
    children
} : TUXProvider) => {
  const [globalOpen, setGlobalOpen] = React.useState(true)

   return(
        <UXContext.Provider value={{globalOpen, setGlobalOpen}}>
            {children}
        </UXContext.Provider>
    )
}
   
export default UXProvider
