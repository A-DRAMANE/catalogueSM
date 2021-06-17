import React, { useContext } from 'react'
import {getCars} from '../localStorage/getData'
import { useHistory } from 'react-router';
import {setId} from '../localStorage/setData'
import '../css/Product.css'
import {DataContext} from '../Context'
import '../css/Search.css'

function Search() {
    

    let history = useHistory();
    const [data, setData] = useContext(DataContext)
    let listItems;
    

    const handleDetail= (e) =>{
        if (getCars()) {
            setId(e.target.id)
            history.push('/detail')
        }
        
    }
    if (getCars()) {
        listItems = getCars().map((car) => car.vehicule === data.search ? 
        <div className="product" key={car.id} id={car.id}>
            <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                <p className='comment'>{car.vehicule} de {car.annee} </p>
                <p  id={car.id}
                    onClick={e => handleDetail(e)}
                    style={{color:'blue',cursor:'pointer'}}>details...</p>
            </div>
        </div> : ''
        );
    }else listItems = '';

    return (
        <div className='search'>
            <h1>RECHERCHE</h1>
            {listItems}
        </div>
    )
}

export default Search
