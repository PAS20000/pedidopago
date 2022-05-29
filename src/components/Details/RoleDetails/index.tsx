import * as React from 'react'
import { ObjRules } from '../../../../pages/role/[id]'
import { Title } from '../../Tables/index.styles'
import RoleAuthsTable from '../../Tables/RoleAuthsTable'
import Container from '../../_Layout/Container'
import FieldLabel from '../FieldLabel'
import { Grid } from './index.styles'

type TRoleDetails = {
    name:string
    groupRules:ObjRules[]
    department:string
}

const RoleDetais = ({
    name,
    groupRules,
    department
} : TRoleDetails) => {

    return (
        <Container>
            <Title>
                Dados do cargo
            </Title>
            <Grid>
                <FieldLabel 
                    title='departamento'
                    options={[department]}
                />
                <FieldLabel 
                    title='cargo'
                    options={[name]}
                />
            </Grid>
            <RoleAuthsTable 
                groupRules={groupRules}
            />
        </Container>
    )
}

export default RoleDetais