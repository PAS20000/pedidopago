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

const Search = ({
    SearchContributors,
    setSearchContributors,
    SearchRoles,
    setSearchRoles,
} : TSearch) => {
    const { breadCrumb } = useBreadCrumb()
    const [ contributor, setContributor ] = React.useState<TContributors[]>()

    const searchContributors = (contributorSearch:string) => {
        const SearchTratament = (StringValue:string) : string => {
            return StringValue.replaceAll(' ' , '').toUpperCase()
        }
        const stringSearch : string = SearchTratament(contributorSearch)
        const contributors : TContributors[] = JSON.parse(localStorage.contributors)
        
        if(contributors){
            setContributor(contributors.filter((contributor) => 
                SearchTratament(contributor.name).includes(stringSearch.toString().replaceAll(',' , ''))
            ))
        }
    }

    const contributorsDetails = async () => {
        const contributor = await axiosConfig('https://pp-api-desafio.herokuapp.com/agent/1')
    }
    const contributors = async () => {
        const contributors = await axiosConfig('https://pp-api-desafio.herokuapp.com/agents')
        localStorage.setItem('contributors' , JSON.stringify(contributors.data.items))
    }

    React.useEffect(() => {
        contributors()
    }, [])

    React.useEffect(() => {
        if(contributor){
            setSearchContributors(contributor)
        }
    }, [contributor])
    
    return(
        <>
            {breadCrumb === 'Contributors' &&
                <input type="text" placeholder='Pesquise por nome ou cpf' onChange={(e) => searchContributors(e.target.value)}/>
            }
            {breadCrumb === 'Roles' && 
                <input type="text" placeholder='Pesquise por cargo'/>
            }
        </>
    )
}

export default Search