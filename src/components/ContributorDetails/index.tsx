import * as React from 'react'
import { TContributors } from '../../../pages'
import Container from '../Container'
import { TAgent } from '../Search'
import { Avatar, Card, ContainerInfo, Icon } from './index.styles'
import { GrDocumentText } from 'react-icons/gr'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineCalendar } from 'react-icons/ai'
import AvatarContributor from '../AvatarContributor'

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
                <Card>
                    <div>
                        <Icon>
                            <GrDocumentText />
                        </Icon>
                        <p>
                            <span>
                                {document.type} 
                            </span>
                            <br />
                            {document.number}
                        </p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <Icon>
                            <FiPhoneCall />
                        </Icon>
                        <p>
                            <span>
                                telefone
                            </span> <br />
                            {phone.ddi} {phone.ddd} {phone.number}
                        </p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <Icon>
                            <AiOutlineCalendar />
                        </Icon>
                        <p>
                            <span>
                                nascimento
                            </span> <br />
                            {birth_dateTratament()}
                        </p>
                    </div>
                </Card>
            </ContainerInfo>
            <h4>
                Dados Organizacionais
            </h4>
            <fieldset>
                <div>
                    <h4>
                        Unidade
                    </h4>
                    <p>
                        {branch}
                    </p>
                </div>
                <div>
                    <h4>
                        Departamento
                    </h4>
                    <p>
                        {department}
                    </p>
                </div>
                <div>
                    <h4>
                        Cargo
                    </h4>
                    <p>
                        {role}
                    </p>
                </div>
                <div>
                    <h4>
                        Status
                    </h4>
                    {status}
                </div>
            </fieldset>
        </Container>
    )
}

export default ContributorDetails