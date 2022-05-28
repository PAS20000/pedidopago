import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { axiosConfig } from '../../src/utils/axiosConfig'
import { TContributors } from '..'
import { TAgent } from '../../src/components/Search'
import Header from '../../src/components/Header'
import NavBar from '../../src/components/NavBar'
import Main from '../../src/components/_Layout/Main'
import Title from '../../src/components/Title'
import ContributorDeatails from '../../src/components/Details/ContributorDetails'

type TParams = {
    params:{
        id:string
    }
}

export const getStaticProps: GetStaticProps = async ({
    params
} : TParams) => {
    
    try {
        const contributor = await axiosConfig(`https://pp-api-desafio.herokuapp.com/agent/${params.id}`)

        return {
            props: {
              contributor:contributor.data.agent,
            },
          }

    } catch (e) {
        console.log(e)
        return {
            props: {
              contributor:{},
            },
            notFound:true
          }
    }

    
  }

export const getStaticPaths : GetStaticPaths = async () => {
    return {
      paths: [
        { params: 
            {
                id:'1' 
            } 
        }
      ],
      fallback:true
    };
  }

export type TContributor = {
    contributor:TContributors & TAgent
}


const Contributor = ({
    contributor
} : TContributor) => {
    const { isFallback } = useRouter()

    if(isFallback){
        return <div>Carregando...</div>
    }

    return(
        <>
            <Header>
                <NavBar />
            </Header>
            <Main>
              <Title href='/'>
                Detalhes do colaborador
              </Title>
              <ContributorDeatails 
                name={contributor.name}
                branch={contributor.branch}
                agent_id={contributor.agent_id}
                department={contributor.department}
                image={contributor.image}
                status={contributor.status}
                role={contributor.role}
                document={contributor.document}
                email={contributor.email}
                phone={contributor.phone}
                birth_date={contributor.birth_date}
              />
            </Main>
            <footer>

            </footer>
        </>
    )
}

export default Contributor