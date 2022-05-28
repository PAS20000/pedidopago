import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { axiosConfig } from '../../src/utils/axiosConfig'
import Header from '../../src/components/Header'
import NavBar from '../../src/components/NavBar'
import Main from '../../src/components/_Layout/Main'
import Title from '../../src/components/Title'
import { TRoles } from '..'
import RoleDetais from '../../src/components/Details/RoleDetails'
import useUXCTX from '../../src/hooks/useUXCTX/useUXCTX'

type TParams = {
    params:{
        id:string
    }
}

export const getStaticProps : GetStaticProps = async ({
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

export type TPermissions = [
    'read',
    'delete',
    'write'
  ]

export type ObjRules = {
  permissions: Array<TPermissions>
  role:string
}

export type TGroupRules = {
  department:string // na api está como department path:https://pp-api-desafio.herokuapp.com/role/1
  grouprules:Array<ObjRules>
}

export type TRole = {
    role:TRoles & TGroupRules
}

const Role = ({
    role
} : TRole) => {
    const { isFallback } = useRouter()
   
    if(isFallback){
        return <div>Carregando...</div>
    }
    
    return(
        <>
            <Header>
                <NavBar />
            </Header>
            <Main>
              <Title href='/'>
                Permissões do cargo
              </Title>
              <RoleDetais 
                name={role.name}
                groupRules={role.grouprules}
                department={role.department}
              />
            </Main>
            <footer>
                
            </footer>
        </>
    )
}

export default Role