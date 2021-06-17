import React from 'react'
import {setId} from '../localStorage/setData'
import {getCars} from '../localStorage/getData'
import '../css/Product.css'
import { useHistory } from 'react-router';

function ShowCat({Categorie}) {
    let history = useHistory();
    let listItems = ''

    const handleDetail= (e) =>{
        setId(e.target.id)
        history.push('/detail')
    }
    if (getCars()) {
        listItems = getCars().map((car) => car.categori === Categorie ?
        <div className="product" key={car.id} id={car.id}>
            <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                <p className='comment'>{car.vehicule} de {car.annee} </p>
                <p  id={car.id}
                    onClick={e => handleDetail(e)}
                    style={{color:'blue',cursor:'pointer'}}>details...</p>
            </div>
        </div> : ''
    );
    }else{
        listItems = '';
    }
    

    return (
        listItems
    )
}

export default ShowCat
