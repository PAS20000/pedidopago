import * as React from 'react'


type TBread = 'Contributors' | 'Roles'

export type TUX = {
    globalOpen?:boolean
    setGlobalOpen?:React.Dispatch<React.SetStateAction<boolean>>
    breadCrumb?:TBread
    setBreadCrumb?:React.Dispatch<React.SetStateAction<TBread>>
}

type TUXProvider = {
    children:React.ReactNode
}

export const UXContext = React.createContext<TUX>(null);

const UXProvider = ({
    children
} : TUXProvider) => {
  const [globalOpen, setGlobalOpen] = React.useState(true)
  const [breadCrumb, setBreadCrumb] = React.useState<TBread>('Contributors')
  

  const value = {
      globalOpen, 
      setGlobalOpen, 
      breadCrumb, 
      setBreadCrumb
    }
   return(
        <UXContext.Provider value={value}>
            {children}
        </UXContext.Provider>
    )
}
   
export default UXProvider
