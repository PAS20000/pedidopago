import * as React from 'react'
import { TContributors } from '../../../../pages'
import Container from '../../_Layout/Container'
import { Avatar, ContainerInfo, ContainerOrganizations, Grid, Title } from './index.styles'
import { GrDocumentText } from 'react-icons/gr'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineCalendar } from 'react-icons/ai'
import AvatarContributor from '../../AvatarContributor'
import Personal from './Personal'
import { TAgent } from '../../Search'
import useUXCTX from '../../../hooks/useUXCTX/useUXCTX'
import FieldLabel from '../FieldLabel'

const ContributorDetails = ({
    name,
    branch,
    department,
    image,
    role,
    status,
    document,
    email,
    phone,
    birth_date
} : TContributors & TAgent) => {

    const { translate } = useUXCTX()


    const birth_dateTratament = () : string => {
        const date =  birth_date.split('T')[0].split('-').reverse()

        const BrazilDate = `${date[0]}/${date[1]}/${date[2]}`


        return BrazilDate
    }

    return (
        <Container>
            <Avatar>
                <AvatarContributor 
                    name={name}
                    image={image}
                    email={email}
                    size={'80px'}
                />
            </Avatar>
            <Title>
                Informações pessoais
            </Title>
            <ContainerInfo>
                <Personal
                    icon={<GrDocumentText />}
                    title={document.type} 
                    text={document.number}
                />
                <Personal 
                    icon={<FiPhoneCall />}
                    title={'telefone'}
                    text={`${phone.ddi} ${phone.ddd} ${phone.number}`}
                />
                <Personal 
                    icon={<AiOutlineCalendar />}
                    title={'nascimento'}
                    text={birth_dateTratament()}
                />
            </ContainerInfo>
            
            <ContainerOrganizations>
                <Title>
                    Dados Organizacionais
                </Title>
                <Grid>
                    <FieldLabel
                        title='unidade'
                        options={[branch]}
                        icon
                    />
                    <FieldLabel 
                        title='departamento'
                        options={[department]}
                        icon
                    />
                    <FieldLabel 
                        title='Cargo'
                        options={[role]}
                        icon
                    />
                    <FieldLabel 
                        title='Status'
                        options={[translate(status)]}
                        icon
                    />
                </Grid>
            </ContainerOrganizations>
        </Container>
    )
}

export default ContributorDetails