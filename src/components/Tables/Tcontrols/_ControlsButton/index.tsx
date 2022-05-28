import * as React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import useUXCTX from '../../../../hooks/useUXCTX/useUXCTX'
import { Container } from './index.styles'

const ControlButtons = () => {
    const { setSliceData, sliceData, slicer, pages } = useUXCTX()
    const [currentPage, setCurrentPage] = React.useState(1)

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
        setSliceData({
            init:sliceData.init - slicer,
            final:sliceData.final - slicer,
        })
    }
    const nextPage = () => {
        setCurrentPage(currentPage + 1)
        setSliceData({
            init:sliceData.init + slicer,
            final:sliceData.final + slicer,
        })
    }

   
    return(
        <Container>
            <button
                onClick={prevPage}
                className={currentPage >= 1 ? 'prev ghost' : 'prev'}>
                <MdArrowBackIosNew />
            </button>
            <h3>
                {currentPage} de {pages.length}
            </h3>
            <button
                onClick={nextPage}
                className={currentPage >= pages.length ? 'next ghost' : 'next'}>
                <MdArrowForwardIos />
            </button>
        </Container>
    )
}

export default ControlButtons