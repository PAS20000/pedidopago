import * as React from 'react'
import { TContributors } from '../../../pages'
import Container from '../Container'
import { Avatar, ContainerInfo, ContainerOrganizations } from './index.styles'
import { GrDocumentText } from 'react-icons/gr'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineCalendar } from 'react-icons/ai'
import AvatarContributor from '../AvatarContributor'
import LabelText from '../LabelText'
import Personal from './Personal'
import Organization from './Organizaiton'
import { TAgent } from '../Search'

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
                    size={'75px'}
                />
            </Avatar>
            <h4>
                Informações pessoais
            </h4>
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
            <h4>
                    Dados Organizacionais
                </h4>
            <ContainerOrganizations>
                
                <Organization
                    width='4.4rem'
                    title='unidade'
                    options={[branch]}
                />
                 <Organization 
                    width='7rem'
                    title='departamento'
                    options={[department]}
                />
                <Organization 
                    width='3.2rem'
                    title='Cargo'
                    options={[role]}
                />
                <Organization 
                    width='3.2rem'
                    title='Status'
                    options={[status]}
                />
            </ContainerOrganizations>
        </Container>
    )
}

export default ContributorDetails