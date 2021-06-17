import React from 'react'
import Product from './Product'
import '../css/ListProduct.css'
import {getCars} from '../localStorage/getData'


function ListProduct() {
    console.log(localStorage);
    return (
        <div className="ListProduct">
            <h1>VEHICULES</h1>
            { getCars() ? <Product Cars={getCars()}/> : <div>Aucune voiture ajouter dans PROFILE</div>}
        </div>
    )
}

export default ListProduct
