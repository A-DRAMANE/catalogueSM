import React, { useState } from 'react'
import { setCars } from '../localStorage/setData'
import { useHistory } from 'react-router';
import '../css/Ajouter.css'



function Ajouter() {

    //global variables
    const [categori, setcategori] = useState('')
    const [vehicule, setvehicule] = useState('')
    const [prix, setprix] = useState('')
    const [annee, setannee] = useState('')
    const [description, setdescription] = useState('')
    let history = useHistory();

    const handleSend = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/index.php?callData")
    .then((response) => response.json())
    .then((response) => {
        let ADD = JSON.parse(response.produits)
        console.log("ADD",ADD);
        let d = new Date();
        let curentADD =
            {
            categori:categori,
            vehicule:vehicule,
            prix:prix,
            annee:annee,
            description:description,
            id:d.getTime()
        }
        
            ADD.push(curentADD)
        
        console.log(ADD);
        setCars(ADD);
        ADD = JSON.stringify(ADD)

        fetch("http://localhost:4000/index.php?ADD="+ADD)
        history.push('/list')
    })
    .catch((response) => console.log("ERREUR CHARGEMENT",response))
    history.push('/profil')

    
    }

    return (
        <div className='ajouter'>
            <form onSubmit={handleSend} method='GET'>
            <p> AJOUTER UN PRODUIT</p>
            <br/>
            <br/>

            <p> Categorie de la voiture</p>
            
            <select onChange={e => setcategori(e.target.value)} value={categori} >
                <option valeur=" ">selectionnez</option>
                <option valeur="monospace">monospace</option>
                <option valeur="citadine">citadine</option>
                <option valeur="crossover">crossover</option>
            </select>

            <p> Marque du vehicule</p>
            <input
                required
                type="text"
                placeholder="Entrer"
                onChange={e => setvehicule(e.target.value)}
                />

            <p> Année de série</p>
            <input
                required
                type="number"
                placeholder="Entrer"
                onChange={e => setannee(e.target.value)}
                />

            <p> PRIX en FCFA</p>
            <input
                required
                type="number"
                placeholder="Entrer"
                onChange={e => setprix(e.target.value)}
                />

            <p>Description</p>
            <textarea style={{width:'65%'}} placeholder='Entrer' 
            onChange={e => setdescription(e.target.value)}
            >
            </textarea>

            <button className='sub'>VALIDE</button>

            </form>

        </div>
    )
}

export default Ajouter
