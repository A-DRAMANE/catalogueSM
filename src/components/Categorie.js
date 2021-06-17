import React, { useState } from 'react'
import {getCars} from '../localStorage/getData'
import ShowCat from './ShowCat'

function Categorie() {
    const [categorie, setcategorie] = useState('')
    
    return (
        <div className='categuorie'>
            <h1>CATEGORIE</h1>
            <div className='cate'>
            <p onClick={e => setcategorie('monospace')} value='monospace' >monospace</p>
            <p onClick={e => setcategorie('citadine')} value='citadine' >citadine</p>
            <p onClick={e => setcategorie('crossover')} value='crossover' >crossover</p>
            </div>

            <ShowCat Categorie={categorie}/>
            
        </div>
    )
}

export default Categorie
