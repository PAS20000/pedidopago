import * as React from 'react'
import { GetStaticProps } from 'next'
import { axiosConfig } from '../src/utils/axiosConfig'
import Title from '../src/components/Title'
import Main from '../src/components/Main'
import Header from '../src/components/Header'
import useDataCTX from '../src/hooks/useDataCTX/useDataCTX'
import useResposive from '../src/hooks/useResponsive/useResponsive'
import MobileContributorCard from '../src/components/_Mobile/MobileContributorCard'
import DesktopNavBar from '../src/components/_Desktop/DesktopNavBar'
import DesktopTable from '../src/components/_Desktop/DesktopTable'
import Container from '../src/components/Container'
import { breakPoints } from '../src/utils/breakPoints'

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

    useDataCTX({
        staticDataContributors:dataContributor, 
        staticDataRoles:dataRoles
    })

    const { width } = useResposive()

    return(
        <>
            {width > breakPoints[1] &&
                <>
                    <Header>
                        <DesktopNavBar />
                    </Header>
                    <Main>
                        <section>
                            <Title>
                                Organização
                            </Title>
                            <Container>
                                <DesktopTable />
                            </Container>
                        </section>
                    </Main>
                    <footer>
                        
                    </footer> 
                </>
            }

            {width < breakPoints[1] && // mobile
                <>
                   <Header>
                        
                   </Header>
                   <Main>
                       <section>
                            <Title>
                                Colaboradores
                            </Title>
                            <Container>
                                <MobileContributorCard />
                            </Container>
                       </section>
                   </Main>
                   <footer>

                   </footer>
                </>
            }
        </>
    )
}

export default Home