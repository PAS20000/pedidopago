import * as React from 'react'
import { GetStaticProps } from 'next'
import { axiosConfig } from '../src/utils/axiosConfig'
import Card from '../src/components/Card'
import Table from '../src/components/Table'
import Title from '../src/components/Title'
import Main from '../src/components/Main'
import Header from '../src/components/Header'
import NavBar from '../src/components/NavBar'
import useDataCTX from '../src/hooks/useDataCTX/useDataCTX'

export const getStaticProps: GetStaticProps = async (ctx) => {
    const employees = await axiosConfig('https://pp-api-desafio.herokuapp.com/agents')
    const roles = await axiosConfig('https://pp-api-desafio.herokuapp.com/roles')

    return {
      props: {
        dataContributor:employees.data.items,
        dataRoles:roles.data.roles
      }
    }
  }

export type TContributors = {
    agent_id: number
    branch: string
    department: string
    image:string
    name:string
    role: string
    status: string
}

export type TRoles = {
    name: string,
	departament: string,
	agents_quantity: number
}

type THomeProps = {
    dataContributor:TContributors[]
    dataRoles:TRoles[]
}

const Home = ({
    dataContributor,
    dataRoles
} : THomeProps) => {

    useDataCTX({
        staticDataContributors:dataContributor, 
        staticDataRoles:dataRoles
    })

    return(
        <>
            <Header>
                <NavBar />
            </Header>
            <Main>
                <Title>
                    Organização
                </Title>
               <Card>
                    <Table />
               </Card>
            </Main>
            <footer>
                
            </footer>
        </>
    )
}

export default Home