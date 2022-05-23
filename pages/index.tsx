import * as React from 'react'
import { GetStaticProps } from 'next'
import { axiosConfig } from '../src/utils/axiosConfig'
import useUserState from '../src/hooks/useUserState/useUserState'
import useTheme from '../src/hooks/useTheme/useTheme'
import Card from '../src/components/Card/Card'
import Table from '../src/components/Table/Table'

export const getStaticProps: GetStaticProps = async (ctx) => {
    const employees = await axiosConfig('https://pp-api-desafio.herokuapp.com/agents')
    
    return {
      props: {
        data:employees.data.items
      }
    }
  }

export type TData = {
    agent_id: number
    branch: string
    department: string
    image:string
    name:string
    role: string
    status: string
}

type TypeEmployees = {
    data:TData[]
}

const Home = ({
    data
} : TypeEmployees) => {
    const { userState, setUserState } = useUserState()
    const { mode } = useTheme()

    console.log(data)
    console.log(userState)
    console.log(mode)

    return(
        <>
            <header>

            </header>
            <main>
               <Card>
                    <Table data={data} title={'Listagem de colaboradores'}>
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
                    </Table>
               </Card>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Home

/*
    }*/