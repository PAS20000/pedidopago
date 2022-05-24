import * as React from 'react'
import { TContributors, TRoles } from '../../../../pages'
import useBreadCrumb from '../../../hooks/useBreadCrumb/useBreadCrumb'
import { axiosConfig } from '../../../utils/axiosConfig'

type TSearch = {
    SearchContributors:TContributors[]
    setSearchContributors:React.Dispatch<React.SetStateAction<any>>
    SearchRoles:TRoles[]
    setSearchRoles:React.Dispatch<React.SetStateAction<any>>
}
type TAgent = {
    email: string
    phone: {
        ddd: string
        ddi: string
        number: string
    },
    document: {
        type: string
        number:string
    },
    birth_date:string
}

const Search = ({
    SearchContributors,
    setSearchContributors,
    SearchRoles,
    setSearchRoles,
} : TSearch) => {
    const { breadCrumb } = useBreadCrumb()
    const [ Localcontributors, setLocalcontributors ] = React.useState<TContributors[]>()
    const [ LocalRoles, setLocalRoles ] = React.useState<TRoles[]>()
    const [ StringSearchContributor, setStringSearchContributor] = React.useState<string>()
    const [ StringSearchRoles , setStringSearchRoles] = React.useState<string>()

    const SearchTratament = (StringValue:string) : string => {
        return StringValue.replaceAll(' ' , '').toUpperCase()
    }

    const searchContributors = (contributorSearch:string) => {
        
        const stringSearch : string = SearchTratament(contributorSearch)
        const contributors : Array<TContributors & TAgent> = JSON.parse(localStorage.contributors)
        
        if(contributors && breadCrumb === 'Contributors'){
            setLocalcontributors(contributors.filter((contributor) => contributor.document &&
                SearchTratament(contributor.document.number).includes(stringSearch)
                ||
                SearchTratament(contributor.name).includes(stringSearch)
            ))
            setStringSearchContributor(contributorSearch)
        }
    }

    const searchRoles = (roleSearch:string) => {
        const stringSearch : string = SearchTratament(roleSearch)
        const roles : Array<TRoles> = JSON.parse(localStorage.roles)
        
        if(roles && breadCrumb === 'Roles'){
            setLocalRoles(roles.filter((role) =>
                SearchTratament(role.name).includes(stringSearch)
            ))
            setStringSearchRoles(roleSearch)
        }
    }
    
    const contributors = async () => {
        try {
                const contributors = await axiosConfig('https://pp-api-desafio.herokuapp.com/agents')
                const contributorKai = await axiosConfig('https://pp-api-desafio.herokuapp.com/agent/1')
                const Agent : TAgent = contributorKai.data.agent
                const items : TContributors[] = contributors.data.items
                const itemsExceptKai = items.filter((contributor) => contributor.agent_id !== 1)
                const InJectKaiCPF = [
                { 
                    ...items[0], 
                    email:Agent.email, 
                    phone:Agent.phone, 
                    document:Agent.document, 
                    birth_date:Agent.birth_date
                }, 
                ...itemsExceptKai
            ]
            
            localStorage.setItem('contributors' , JSON.stringify(InJectKaiCPF))
        } catch (e) {
            alert('Contributors data error'), console.log(e)
        }
    }

    const roles = async () => {
        try {
                const roles = await axiosConfig('https://pp-api-desafio.herokuapp.com/roles')

                localStorage.setItem('roles' , JSON.stringify(roles.data.roles))
        } catch (e) {
            alert('Roles data error'), console.log(e)
        }
    }
    React.useEffect(() => {
        contributors()
        roles()
    }, [])

    React.useEffect(() => {
        if(Localcontributors){
            setSearchContributors(Localcontributors)
        }
        if(LocalRoles){
            setSearchRoles(LocalRoles)
        }
    }, [Localcontributors, LocalRoles])
    
    return(
        <>
            {breadCrumb === 'Contributors' &&
                <input type="text" placeholder='Pesquise por nome ou cpf' onChange={(e) => searchContributors(e.target.value)} value={StringSearchContributor ?? ''}/>
            }
            {breadCrumb === 'Roles' && 
                <input type="text" placeholder='Pesquise por cargo' onChange={(e) => searchRoles(e.target.value)}  value={StringSearchRoles ?? ''}/>
            }
        </>
    )
}

export default Search