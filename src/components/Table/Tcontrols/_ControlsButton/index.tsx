import * as React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { Container } from './index.styles'


const ControlButtons = () => {
    return(
        <Container>
            <button>
                <MdArrowBackIosNew />
            </button>
            <h3>
                1 de 10
            </h3>
            <button>
                <MdArrowForwardIos />
            </button>
        </Container>
    )
}

export default ControlButtons