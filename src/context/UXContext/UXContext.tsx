import * as React from 'react'

export type TBread = 'Contributors' | 'Roles'

export type TSearch = {
    contributors?:string
    roles?:string
}
export type TSliceDataObjs = {
    init:number
    final:number
   
}
type TSliceData = {
    contributors?:TSliceDataObjs
    roles?:TSliceDataObjs
}

type TSplice = {
    contributors:number
    roles:number
}

type TSet<T> =  React.Dispatch<React.SetStateAction<T>>

export type TUX = {
    globalOpen: boolean
    setGlobalOpen: TSet<boolean>
    breadCrumb: TBread
    setBreadCrumb: TSet<TBread>
    searchValue: TSearch
    setSearchValue: TSet<TSearch>
    sliceData: TSliceData
    setSliceData: TSet<TSliceData>
    pages: Array<number>
    setPages: TSet<Array<number>>
    slicer: number
    translate: Function
    spliceData: TSplice
    setSplicaData: TSet<TSplice>
}

type TUXProvider = {
    children:React.ReactNode
}

export const UXContext = React.createContext<TUX>(null);

const UXProvider = ({
    children
} : TUXProvider) => {
  const [globalOpen, setGlobalOpen] = React.useState<boolean>(false)
  const [breadCrumb, setBreadCrumb] = React.useState<TBread>('Contributors')

  const [searchValue, setSearchValue] = React.useState<TSearch>({
      contributors:'',
      roles:''
  })
  
  const slicer = 10

  const [sliceData, setSliceData] = React.useState<TSliceData>({
      contributors:{
          init:0,
          final:slicer
      },
      roles:{
          init:0,
          final:slicer
      }
  })

  const [spliceData, setSplicaData] = React.useState({
      contributors:10,
      roles:10,
  })

  const [ pages, setPages ] = React.useState<Array<number>>([])


  const translate = (status:string) : string => {
    if(status === 'active'){
        return 'ativo'
    }
    if(status === 'inactive'){
        return 'inativo'
    }
    if(!status){
        return 'inativo'

    } else {
        return 'inativo'
    }
    
}


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
      translate,
      spliceData, 
      setSplicaData,
    }
    
   return(
        <UXContext.Provider value={value}>
            {children}
        </UXContext.Provider>
    )
}

export default UXProvider