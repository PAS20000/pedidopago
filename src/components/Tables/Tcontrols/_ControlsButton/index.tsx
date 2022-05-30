import * as React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import useDataCTX from '../../../../hooks/useDataCTX/useDataCTX'
import useUXCTX from '../../../../hooks/useUXCTX/useUXCTX'
import { Container } from './index.styles'

const ControlButtons = () => {
    const { setSliceData, sliceData, slicer, pages, breadCrumb } = useUXCTX()
    const { dataContributors, dataRoles } = useDataCTX()

    const [currentPage, setCurrentPage] = React.useState(1)

    const Pages = !pages.length ? 1 : pages.length

    const prevPage = () => {
        if(breadCrumb === 'Contributors'){
            setSliceData({
                ...sliceData,
                contributors:{
                    init:sliceData.contributors.init - slicer,
                    final:sliceData.contributors.final - slicer,
                }
            })
        }
        if(breadCrumb === 'Roles'){
            setSliceData({
                ...sliceData,
                 roles:{
                     init:sliceData.roles.init - slicer,
                     final:sliceData.roles.final - slicer,
                 }
             })
        }

        setCurrentPage(currentPage - 1)
    }
    const nextPage = () => {
        
        if(breadCrumb === 'Contributors'){
            setSliceData({
                ...sliceData,
                contributors:{
                    init:sliceData.contributors.init + slicer,
                    final:sliceData.contributors.final + slicer,
                }
            })
        }
        if(breadCrumb === 'Roles'){
            setSliceData({
                ...sliceData,
                 roles:{
                     init:sliceData.roles.init + slicer,
                     final:sliceData.roles.final + slicer,
                 }
             })
        }

        setCurrentPage(currentPage + 1)
    }

    React.useEffect(() => {
        return () => {
            setSliceData({
                contributors:{
                    init:0,
                    final:slicer,
                },
                roles:{
                    init:0,
                    final:slicer,
                }
            })
        }
    }, [breadCrumb])
    
    const changeClassName = (how:'next' | 'prev') : string => {
        if(how === 'prev'){
            return currentPage === 1 ? 'prev ghost' : 'prev' 
        }
        if(how === 'next'){
            return currentPage === Pages ? 'next ghost' : 'next'
        }
    }
    console.log(pages)
    return(
        <Container>
            <button
                onClick={prevPage}
                className={changeClassName('prev')}>
                <MdArrowBackIosNew />
            </button>
            <h3>
                {currentPage} de {Pages}
            </h3>
            <button
                onClick={nextPage}
                className={changeClassName('next')}>
                <MdArrowForwardIos />
            </button>
        </Container>
    )
}

export default ControlButtons