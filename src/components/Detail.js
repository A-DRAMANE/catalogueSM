import React from 'react'
import {getCars} from '../localStorage/getData'
import {getId} from '../localStorage/getData'
import '../css/Detail.css'

function Detail() {


    let element = getCars().map(car => {
    
        if (car.id === parseInt(getId())) {
            return <div key={parseInt(getId())} className='detail'>
            <h1>{car.vehicule}</h1>
            <div className='detailIn'>
                <p className='tag'>Une voiture de {car.annee}, {car.categori}</p> 
                <p><span>Description</span> : {car.description}</p> 
                <p><span>PRIX</span>: {car.prix} FCFA</p> 
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
