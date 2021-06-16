import react,{useState, createContext} from 'react'

export const DataContext = createContext()

export const DataProvider = (props) =>{

    const [data, setData] = useState({
        nom:'',
        prenom:'',
        url:'',
        search:''
    })

    return(
        <DataContext.Provider value={[data, setData]}>
            {props.children}
        </DataContext.Provider>

    )
}