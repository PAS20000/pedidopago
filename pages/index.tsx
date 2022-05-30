import * as React from 'react'
import { GetStaticProps } from 'next'
import { axiosConfig } from '../src/utils/axiosConfig'
import Title from '../src/components/Title'
import Main from '../src/components/_Layout/Main'
import Header from '../src/components/Header'
import useDataCTX from '../src/hooks/useDataCTX/useDataCTX'
import Table from '../src/components/Tables'
import NavBar from '../src/components/NavBar'
import { Media } from '../src/utils/breakPoints'
import Card from '../src/components/_Mobile'
import { TAgent } from '../src/components/Search'
import styled from "@emotion/styled"

const ContainerMedia = styled.div`
    ${Media(1, 'max')}{
        display: none;
    }
`

export const getStaticProps: GetStaticProps = async (ctx) => {
            const contributors = await axiosConfig('https://pp-api-desafio.herokuapp.com/agents')
            const roles = await axiosConfig('https://pp-api-desafio.herokuapp.com/roles')
            const contributorKai = await axiosConfig('https://pp-api-desafio.herokuapp.com/agent/1')
            const contributorsItems = contributors.data.items
            const Agent : TAgent = contributorKai.data.agent
            const itemsExceptKai = contributorsItems.filter((contributor) => contributor.agent_id !== 1)
            const InJectKaiCPF = [
                { 
                    ...contributorsItems[0], 
                    email:Agent.email, 
                    phone:Agent.phone, 
                    document:Agent.document, 
                    birth_date:Agent.birth_date
                }, 
                ...itemsExceptKai,
            ]

    return {
      props: {
        dataContributor:InJectKaiCPF,
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
    status: 'active' | 'inactive'
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

    const { setDataContributors, setDataRoles } = useDataCTX()

    React.useEffect(() => {
        localStorage.setItem('roles', JSON.stringify(dataRoles))
        localStorage.setItem('contributors', JSON.stringify(dataContributor))
    }, [])

    return(
        <>
            <Header>
                <NavBar />
            </Header>
            <Main>
                <section>
                    
                    <Card /> {/* Mobile */} 
                    <ContainerMedia>
                        <Title>
                            Organização
                        </Title>
                        <Table />
                    </ContainerMedia>
                </section>
            </Main>
        </>
    )
}

export default Home