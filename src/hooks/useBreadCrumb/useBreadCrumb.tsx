import * as React from 'react'
import { BreadCrumbContext } from '../../context/BreadCrumbsContext/BreadCrumbsContext'

const useBreadCrumb = () => {
    const { breadCrumb, setBreadCrumb } = React.useContext(BreadCrumbContext)


    return {
        breadCrumb, 
        setBreadCrumb 
    }
}

export default useBreadCrumb