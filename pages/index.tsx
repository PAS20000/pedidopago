import * as React from 'react'
import { GetStaticProps } from 'next'
import { axiosConfig } from '../src/utils/axiosConfig'
import useUserState from '../src/hooks/useUserState/useUserState'
import useTheme from '../src/hooks/useTheme/useTheme'
import Card from '../src/components/Card/Card'

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
    const { userState } = useUserState()
    const { mode } = useTheme()

    console.log(data)
    console.log(userState)
    console.log(mode)

    return(
        <>
            <header>

            </header>
            <main>
                {data.map(item => 
                    <Card 
                        key={item.agent_id} 
                        agent_id={item.agent_id} 
                        branch={item.branch} 
                        department={item.department} 
                        image={item.image} 
                        name={item.name} 
                        role={item.role} 
                        status={item.status}
                    />)
                }
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Home