import React, { useContext } from 'react'
import {Cars} from '../dataCars'
import {DataContext} from '../Context'

function Search() {

    let i = 0;

    const [data, setData] = useContext(DataContext)

    let itemsList = Cars.map(car => car.field2 === data.search ? 
        <div className="product" key={i++} id={i++}>
            <p>{car.field2} de {car.field5} </p>
            <button>details...</button>  
        </div> : "Serach"
    )

    return (
        <div>
            {itemsList}
        </div>
    )
}

export default Search