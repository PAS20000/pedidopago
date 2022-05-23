import * as React from 'react'
import { GetStaticProps } from 'next'
import { axiosConfig } from '../src/utils/axiosConfig'
import useUserState from '../src/hooks/useUserState/useUserState'
import useTheme from '../src/hooks/useTheme/useTheme'

export const getStaticProps: GetStaticProps = async (ctx) => {
    const employees = await axiosConfig('https://pp-api-desafio.herokuapp.com/agents')
    
    return {
      props: {
        data:employees.data.items
      }, // will be passed to the page component as props
    }
  }

type TypeEmployees = {
    data:{
        agent_id: number
        branch: string
        department: string
        image:string
        name:string
        role: string
        status: string
    }
}

const Home = ({
    data
}: TypeEmployees) => {
    const { userState } = useUserState()
    const { mode } = useTheme()
    console.log(data)
    console.log(userState)
    console.log(mode)
    
    return(
        <div>
            Home
        </div>
    )
}

export default Home