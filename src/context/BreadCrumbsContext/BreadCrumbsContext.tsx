import * as React from 'react'

type TBread = 'Contributors' | 'Roles'

export type TBreadContext = {
    breadCrumb:TBread
    setBreadCrumb:React.Dispatch<React.SetStateAction<TBread>>
}

export const BreadCrumbContext = React.createContext<TBreadContext>(null)

const BreadCrumbProivder = ({children}) => {
    const [breadCrumb, setBreadCrumb] = React.useState<TBread>('Contributors')
   
   return(
        <BreadCrumbContext.Provider value={{breadCrumb, setBreadCrumb}}>
            {children}
        </BreadCrumbContext.Provider>
    )
}
   
export default BreadCrumbProivder