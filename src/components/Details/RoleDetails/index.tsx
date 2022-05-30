import * as React from 'react'
import { ObjRules } from '../../../../pages/role/[id]'
import RoleAuthsTable from '../../Tables/RoleAuthsTable'
import Container from '../../_Layout/Container'
import FieldLabel from '../FieldLabel'
import { ContainerMedia, Grid, Title } from './index.styles'

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
    <ContainerMedia>
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
    </ContainerMedia>
    )
}

export default RoleDetais