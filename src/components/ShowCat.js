import React from 'react'
import {setId} from '../localStorage/setData'
import {getCars} from '../localStorage/getData'
import '../css/Product.css'
import { useHistory } from 'react-router';

function ShowCat({Categorie}) {
    let history = useHistory();
    console.log(getCars());

    const handleDetail= (e) =>{
        setId(e.target.id)
        history.push('/detail')
    }

    const listItems = getCars().map((car) => car.categori === Categorie ?
    <div className="product" key={car.id} id={car.id}>
        <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
            <p>{car.vehicule} de {car.annee} </p>
            <p  id={car.id}
                onClick={e => handleDetail(e)}
                style={{color:'blue',cursor:'pointer'}}>details...</p>
        </div>
    </div> : ''
    );

    return (
        listItems
    )
}

export default ShowCat
