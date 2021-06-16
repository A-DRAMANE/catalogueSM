import React, { useContext } from 'react'
import {Cars} from '../dataCars'
import {DataContext} from '../Context'
import '../css/Search.css'

function Search() {

    let i = 0;

    const [data, setData] = useContext(DataContext)

    let itemsList = Cars.map(car => car.field2 === data.search ? 
        <div className="product" key={i++} id={i++}>
            <p>{car.field2} de {car.field5} </p>
            <button>details...</button>  
        </div> : ""
    )

    return (
        <div className='search'>
            {itemsList}
        </div>
    )
}

export default Search
