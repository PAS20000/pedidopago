import * as React from 'react'
import { GetStaticProps } from 'next'
import { axiosConfig } from '../src/utils/axiosConfig'
import useUserState from '../src/hooks/useUserState/useUserState'
import useTheme from '../src/hooks/useTheme/useTheme'
import Card from '../src/components/Card/Card'
import Table from '../src/components/Table/Table'
import Thead from '../src/components/Table/Thead/Thead'

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

export type TEmployees = {
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
    dataEmployees:TEmployees[]
    dataRoles:TRoles[]
}

const Home = ({
    dataEmployees,
    dataRoles
} : THomeProps) => {
    const { userState, setUserState } = useUserState()
    const { mode } = useTheme()

    console.log(dataEmployees)
    console.log(userState)
    console.log(mode)

    return(
        <>
            <header>

            </header>
            <main>
               <Card>
                    
                    <Table 
                        dataEmployees={dataEmployees} 
                        dataRoles={dataRoles} 
                        title={'Listagem de colaboradores'}
                    >
                        <Thead>
                            <th>
                                <h4>
                                    Nome completo
                                </h4>
                            </th>
                            <th>
                                <h4>
                                    Departamento
                                </h4>
                            </th>
                            <th>
                                <h4>
                                    Cargo
                                </h4>
                            </th>
                            <th >
                            <h4>
                                    Unidade
                            </h4>
                            </th>
                            <th >
                                <h4>
                                    Status
                                </h4>
                            </th>
                            <th />
                        </Thead>
                    </Table>
               </Card>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Home