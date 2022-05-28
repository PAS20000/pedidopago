import * as React from 'react'

export type TBread = 'Contributors' | 'Roles'

export type TSearch = {
    contributors?:string
    roles?:string
}

type TSliceData = {
    init:number
    final:number
}


export type TUX = {
    globalOpen:boolean
    setGlobalOpen:React.Dispatch<React.SetStateAction<boolean>>
    breadCrumb:TBread
    setBreadCrumb:React.Dispatch<React.SetStateAction<TBread>>
    searchValue:TSearch
    setSearchValue:React.Dispatch<React.SetStateAction<TSearch>>
    sliceData:TSliceData
    setSliceData:React.Dispatch<React.SetStateAction<TSliceData>>
    pages:Array<number>
    setPages:React.Dispatch<React.SetStateAction<Array<number>>>
    slicer:number
}

type TUXProvider = {
    children:React.ReactNode
}

export const UXContext = React.createContext<TUX>(null);

const UXProvider = ({
    children
} : TUXProvider) => {
  const [globalOpen, setGlobalOpen] = React.useState<boolean>(true)
  const [breadCrumb, setBreadCrumb] = React.useState<TBread>('Contributors')
  const [searchValue, setSearchValue] = React.useState<TSearch>({
      contributors:'',
      roles:''
  })
  const slicer = 10
  const [sliceData, setSliceData] = React.useState<TSliceData>({
      init:0,
      final:slicer
  })
  const [ pages, setPages ] = React.useState<Array<number>>([])
   
  const value = {
      globalOpen, 
      setGlobalOpen, 
      breadCrumb, 
      setBreadCrumb,
      searchValue,
      setSearchValue,
      sliceData,
      setSliceData,
      pages,
      setPages,
      slicer,
    }
    
   return(
        <UXContext.Provider value={value}>
            {children}
        </UXContext.Provider>
    )
}

export default UXProvider