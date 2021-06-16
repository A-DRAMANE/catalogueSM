import React from 'react'
import {Cars} from '../dataCars'
import '../css/Product.css'

function Product() {
    let DataCars = []
    let i = 0;

    console.log(Cars);

    const listItems = Cars.map((car) =>  
    <div className="product" key={i++} id={i++}>
        <p>{car.field2} de {car.field5} </p>
        <button>details...</button>  
    </div>);

    return (
        listItems
    )
}

export default Product
