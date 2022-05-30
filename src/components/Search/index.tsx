import * as React from 'react'
import { TContributors, TRoles } from '../../../pages'
import useDataCTX from '../../hooks/useDataCTX/useDataCTX'
import useUXCTX from '../../hooks/useUXCTX/useUXCTX'
import Input from './input'

export type TAgent = {
    email?: string
    phone?: {
        ddd: string
        ddi: string
        number: string
    },
    document?: {
        type: string
        number:string
    },
    birth_date?:string
}

const Search = ({}) => {
    const { setDataContributors, setDataRoles } = useDataCTX()
    const { breadCrumb, searchValue, setSearchValue } = useUXCTX()
    
    const SearchTratament = (StringValue:string) : string => {
        return StringValue && StringValue.replaceAll(' ' , '').toUpperCase()
    }

    const searchContributors = (contributorSearch:string) => {
        
        const stringSearch : string = SearchTratament(contributorSearch)
        const contributors : Array<TContributors & TAgent> = localStorage.contribuors && JSON.parse(localStorage.contributors)
        
        if(contributors && breadCrumb === 'Contributors'){
            setDataContributors(contributors.filter((contributor) => contributor.document &&
                SearchTratament(contributor.document.number).includes(stringSearch)
                ||
                SearchTratament(contributor.name).includes(stringSearch)
            ))

            setSearchValue({
                ...searchValue,
                contributors:contributorSearch,
            })
        }
    }

    const searchRoles = (roleSearch:string) => {
        
        const stringSearch : string = SearchTratament(roleSearch)
        const roles : Array<TRoles> = localStorage.roles && JSON.parse(localStorage.roles)
        
        if(roles && breadCrumb === 'Roles'){
            setDataRoles(roles.filter((role) =>
                SearchTratament(role.name).includes(stringSearch)
            ))

            setSearchValue({
                ...searchValue,
                roles:roleSearch
            })
        }
    }
   
    React.useEffect(() => {
        return () => {
            setSearchValue({
                contributors:'',
                roles:''
            })
        }
    }, [])

    return(
        <>
            {breadCrumb === 'Contributors' &&
               <Input placeholder='Pesquise por nome ou cpf' onChange={(e) => searchContributors(e.target.value)} value={searchValue.contributors} />
            }
            {breadCrumb === 'Roles' && 
                <Input placeholder='Pesquise por cargo' onChange={(e) => searchRoles(e.target.value)}  value={searchValue.roles}/>
            }
        </>
    )
}

export default Search