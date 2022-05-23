import * as React from 'react'

type TBread = 'Colaboradores' | 'Cargos'

type TProps = {
    breadCrumb:TBread
    setBreadCrumb:Function
}
export const BreadCrumbContext = React.createContext<TProps>(null)

const BreadCrumbProivder = ({children}) => {
    const [breadCrumb, setBreadCrumb] = React.useState<TBread>('Colaboradores')
   
   return(
        <BreadCrumbContext.Provider value={{breadCrumb, setBreadCrumb}}>
            {children}
        </BreadCrumbContext.Provider>
    )
}
   
export default BreadCrumbProivder