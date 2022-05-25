import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { axiosConfig } from '../../src/utils/axiosConfig'
import { TContributors } from '..'
import { TAgent } from '../../src/components/Table/Search'
import Header from '../../src/components/Header'
import NavBar from '../../src/components/NavBar'
import Main from '../../src/components/Main'
import Card from '../../src/components/Card'
import Title from '../../src/components/Title'

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

type TContributor = {
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
              <Title>
                Detalhes do colaborador
              </Title>
              <Card>
                  {contributor.name}
              </Card>
            </Main>
            <footer>

            </footer>
        </>
    )
}

export default Contributor