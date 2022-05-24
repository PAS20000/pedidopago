import * as React from 'react'
import { GetStaticProps } from 'next'
import { axiosConfig } from '../src/utils/axiosConfig'
import Card from '../src/components/Card'
import Table from '../src/components/Table'
import styled from '@emotion/styled'

export const getStaticProps: GetStaticProps = async (ctx) => {
    const employees = await axiosConfig('https://pp-api-desafio.herokuapp.com/agents')
    const roles = await axiosConfig('https://pp-api-desafio.herokuapp.com/roles')

    return {
      props: {
        dataEmployees:employees.data.items,
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
    dataEmployees:TContributors[]
    dataRoles:TRoles[]
}

const Main = styled.main`
  background-color:${props => props.theme.color.bg};
  h1{
      color: ${props => props.theme.color.text};
  }
`
const Home = ({
    dataEmployees,
    dataRoles
} : THomeProps) => {
    
    return(
        <>
            <header>

            </header>
            <Main>
               <Card>
                    <h1>
                        Organização
                    </h1>
                    <Table 
                        dataContributors={dataEmployees} 
                        dataRoles={dataRoles} 
                    />
               </Card>
            </Main>
            <footer>

            </footer>
        </>
    )
}

export default Home