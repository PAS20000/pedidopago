import * as React from 'react'
import { TContributors, TRoles } from '../../../../pages'
import useDataCTX from '../../../hooks/useDataCTX/useDataCTX'
import useUXCTX from '../../../hooks/useUXCTX/useUXCTX'
import Input from './input'

export type TAgent = {
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

const Search = ({}) => {
    const { setDataContributors, setDataRoles } = useDataCTX({})
    const { breadCrumb } = useUXCTX()
    const [ StringSearchContributor, setStringSearchContributor] = React.useState<string>()
    const [ StringSearchRoles , setStringSearchRoles] = React.useState<string>()
    
    const SearchTratament = (StringValue:string) : string => {
        return StringValue && StringValue.replaceAll(' ' , '').toUpperCase()
    }

    const searchContributors = (contributorSearch:string) => {
        
        const stringSearch : string = SearchTratament(contributorSearch)
        const contributors : Array<TContributors & TAgent> = JSON.parse(localStorage.contributors)
        
        if(contributors && breadCrumb === 'Contributors'){
            setDataContributors(contributors.filter((contributor) => contributor.document &&
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
            setDataRoles(roles.filter((role) =>
                SearchTratament(role.name).includes(stringSearch)
            ))
            setStringSearchRoles(roleSearch)
        }
    }
    
    return(
        <>
            {breadCrumb === 'Contributors' &&
               <Input placeholder='Pesquise por nome ou cpf' onChange={(e) => searchContributors(e.target.value)} value={StringSearchContributor ?? ''} />
            }
            {breadCrumb === 'Roles' && 
                <Input placeholder='Pesquise por cargo' onChange={(e) => searchRoles(e.target.value)}  value={StringSearchRoles ?? ''}/>
            }
        </>
    )
}

export default Search