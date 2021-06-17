import React from 'react'
import {getCars} from '../localStorage/getData'
import {getId} from '../localStorage/getData'
import '../css/Detail.css'

function Detail() {

    console.log(getId(),getCars());

    let element = getCars().map(car => {
    
        if (car.id === parseInt(getId())) {
            return <div className='detail'>
            <h1>{car.vehicule}</h1>
            <div className='detailIn'>
                <p>Une voiture de {car.annee}, {car.categori}</p> 
                <p>description: {car.description}</p> 
                <p>PRIX: {car.prix} FCFA</p> 
            </div>
            </div>;  
        }
    } 
        )

    return (
        element
    )
}

export default Detail
