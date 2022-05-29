import * as React from 'react'
import { BsCheck } from 'react-icons/bs'
import { ObjRules } from '../../../../pages/role/[id]'
import { ContainerTable, Title } from '../index.styles'
import TableHead from '../TableHead'
import { Tr } from './index.styles'

type TRolesAutshTable = {
    groupRules:ObjRules[]
}


const RoleAuthsTable = ({
    groupRules
} : TRolesAutshTable) => {

    const AuthsVerify = (rule:ObjRules) => {
        const arrayAuths = rule.permissions
        const Read = arrayAuths.filter(auth => auth.includes('read'))
        const Write = arrayAuths.filter(auth => auth.includes('write'))
        const Delete = arrayAuths.filter(auth => auth.includes("delete"))
        
        const existAuth = (auth:boolean) : React.ReactNode => {
            return( auth ? 
                <div className='check allowed'>
                    <BsCheck />
                </div> 
                : 
                <div className='check notAllowed' />
            )
        }
        return(
            <>
                <td>
                    {existAuth(!!Read[0])}
                </td>
                <td>
                    {existAuth(!!Write[0])}
                </td>
                <td>
                    {existAuth(!!Delete[0])}
                </td>
            </>
        )
    }

    return(
        <>
        <Title>
            Listagem de permissões
        </Title>
            <ContainerTable>
                <thead>
                    <TableHead 
                        classHead='roleAuths'
                        titles={[
                            'cargo',
                            'ler',
                            'editar',
                            'excluir',

                        ]}
                    />
                </thead>
                <tbody >
                    {groupRules.map((rule, index) => 
                        <Tr key={index}>
                            <td>
                                {rule.role}
                            </td>
                            {AuthsVerify(rule)}
                        </Tr>
                    )}
                </tbody>
            </ContainerTable>
        </>
    )
}

export default RoleAuthsTable