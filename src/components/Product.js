import React from 'react'
import {setId} from '../localStorage/setData'
import '../css/Product.css'
import { useHistory } from 'react-router';

function Product({Cars}) {
    let history = useHistory();
    

    const handleDetail= (e) =>{
        setId(e.target.id)
        history.push('/detail')
    }

    const listItems = Cars.map((car) =>  
    <div className="product" key={car.id} id={car.id}>
        <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
            <p className="comment">{car.vehicule} de {car.annee} </p>
            <p  id={car.id}
                onClick={e => handleDetail(e)}
                style={{color:'blue',cursor:'pointer'}}>details...</p>
        </div>
    </div>);

    return (
        listItems
    )
}

export default Product
