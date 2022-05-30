import * as React from 'react'
import { TContributors, TRoles } from '../../../pages'
import { TAgent } from '../../components/Search'
import { axiosConfig } from '../../utils/axiosConfig'

export type TDataContext = {
    dataContributors:Array<TContributors>
    setDataContributors:React.Dispatch<React.SetStateAction<Array<TContributors>>>
    dataRoles:Array<TRoles>
    setDataRoles:React.Dispatch<React.SetStateAction<Array<TRoles>>>
}

type TDataProvider = {
    children:React.ReactNode
}

export const DataContext = React.createContext<TDataContext>(null)

const DataProvider = ({
    children
} : TDataProvider) => {
    const [dataContributors, setDataContributors] = React.useState<Array<TContributors>>([])
    const [dataRoles, setDataRoles] = React.useState<Array<TRoles>>([])

    const dataContributorsGet = async () => {
       try {
            const resp = await axiosConfig('https://pp-api-desafio.herokuapp.com/agents')
            const contributorKai = await axiosConfig('https://pp-api-desafio.herokuapp.com/agent/1')
            const contributors = resp.data.items
            const Agent : TAgent = contributorKai.data.agent
            const itemsExceptKai = contributors.filter((contributor) => contributor.agent_id !== 1)
            const InJectKaiCPF = [
                { 
                    ...contributors[0], 
                    email:Agent.email, 
                    phone:Agent.phone, 
                    document:Agent.document, 
                    birth_date:Agent.birth_date
                }, 
                ...itemsExceptKai,
            ]
        
        setDataContributors(contributors)
        localStorage.setItem('contributors' , JSON.stringify(InJectKaiCPF))
       } catch (e) {
           console.log(e)
       }
    }

    const dataRolesGet = async () => {
        try {
             const resp = await axiosConfig('https://pp-api-desafio.herokuapp.com/roles')
             const roles = resp.data.roles

             localStorage.setItem('roles', JSON.stringify(roles))
             setDataRoles(roles)
        } catch (e) {
            console.log(e)
        }
     }

    React.useEffect(() => {
       dataRolesGet()
       dataContributorsGet()
    }, [])

   return(
        <DataContext.Provider value={{dataContributors, setDataContributors, dataRoles, setDataRoles}}>
            {children}
        </DataContext.Provider>
    )
}
   
export default DataProvider