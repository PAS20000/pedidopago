import * as React from 'react'
import { BsCheck } from 'react-icons/bs'
import { ObjRules, TPermissions } from '../../../../pages/role/[id]'
import { ContainerTable, Title } from '../index.styles'
import TableHead from '../TableHead'
import CheckPermission from './CheckPermissions'
import { Tr } from './index.styles'

type TRolesAutshTable = {
    groupRules:ObjRules[]
}


const RoleAuthsTable = ({
    groupRules
} : TRolesAutshTable) => {

    const AuthsVerify = (permissions:TPermissions[]) => {
        const Read = permissions.filter(auth => auth.includes('read'))
        const Write = permissions.filter(auth => auth.includes('write'))
        const Delete = permissions.filter(auth => auth.includes("delete"))

        return (<>
            <td>
                {!!Read[0] ? 
                    <CheckPermission auth/> 
                    : 
                    <CheckPermission />
                }
            </td>
            <td>
                {!!Write[0] ? 
                    <CheckPermission auth/> 
                    : 
                    <CheckPermission />
                }
            </td>
            <td>
                {!!Delete[0] ? 
                    <CheckPermission auth/> 
                    : 
                    <CheckPermission />
                }
            </td>
        </>)
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
                            {AuthsVerify(rule.permissions)}
                        </Tr>
                    )}
                </tbody>
            </ContainerTable>
        </>
    )
}

export default RoleAuthsTable