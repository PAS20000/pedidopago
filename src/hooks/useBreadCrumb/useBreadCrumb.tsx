import * as React from 'react'
import { BreadCrumbContext, TBreadContext } from '../../context/BreadCrumbsContext/BreadCrumbsContext'



const useBreadCrumb = () : TBreadContext => {
    const { breadCrumb, setBreadCrumb } = React.useContext(BreadCrumbContext)

    return {
        breadCrumb, 
        setBreadCrumb 
    }
}

export default useBreadCrumb