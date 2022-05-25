import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { axiosConfig } from '../../src/utils/axiosConfig'
import Header from '../../src/components/Header'
import NavBar from '../../src/components/NavBar'
import Main from '../../src/components/Main'
import Card from '../../src/components/Card'
import Title from '../../src/components/Title'
import { TRoles } from '..'

type TParams = {
    params:{
        id:string
    }
}

export const getStaticProps: GetStaticProps = async ({
    params
} : TParams) => {
    
    try {
        const resp = await axiosConfig(`https://pp-api-desafio.herokuapp.com/role/${params.id}`)

        return {
            props: {
              role:resp.data.role,
            },
          }

    } catch (e) {
        console.log(e)
        return {
            props: {
              role:{},
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

type ObjRules = {
  permissions: Array<string>
  role:string
}

type TGroupRules = {
  department:string // na api está como department path:https://pp-api-desafio.herokuapp.com/role/1
  grouprules:Array<ObjRules>
}

type TRole = {
    role:TRoles & TGroupRules
}

const Role = ({
    role
} : TRole) => {
    const { isFallback } = useRouter()

    if(isFallback){
        return <div>Carregando...</div>
    }
    console.log(role)
    return(
        <>
            <Header>
                <NavBar />
            </Header>
            <Main>
              <Title>
                Permissões do cargo
              </Title>
              <Card>
                  {role.name}
                  {role.department}
              </Card>
            </Main>
            <footer>
                
            </footer>
        </>
    )
}

export default Role