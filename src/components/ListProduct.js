import React from 'react'
import Product from './Product'
import '../css/ListProduct.css'
import {Cars} from '../dataCars'


function ListProduct() {

    return (
        <div className="ListProduct">
            <Product Cars={Cars}/>
        </div>
    )
}

export default ListProduct
