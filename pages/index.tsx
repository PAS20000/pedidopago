import * as React from 'react'
import { GetStaticProps } from 'next'
import { axiosConfig } from '../src/utils/axiosConfig'
import Card from '../src/components/Card'
import Table from '../src/components/Table'

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

const Home = ({
    dataEmployees,
    dataRoles
} : THomeProps) => {
    
    return(
        <>
            <header>

            </header>
            <main>
                <h1>
                   Organização
                </h1>
               <Card>
                    <Table 
                        dataContributors={dataEmployees} 
                        dataRoles={dataRoles} 
                    />
               </Card>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Home