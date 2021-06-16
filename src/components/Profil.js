import React, { useState, useEffect, useContext } from 'react'
import {DataContext} from '../Context'
import { useHistory } from 'react-router';
import '../css/Profil.css'
import {app} from '../base'

function Profil() {
    let history = useHistory();

    const [data, setData] = useContext(DataContext)

    const [fileUrl, setFileUrl] = useState("")
    let nom = data.nom
    let prenom = data.prenom
    let url = data.url

    

    //storage pic to firebase
    const handleLoad = async (e) => {
        
        const file = e.target.files[0]
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())
        setData({
        nom:nom,
        prenom:prenom,
        url: await fileRef.getDownloadURL()
    })
    }

    const valider = async (e) =>{
        e.preventDefault()
        history.push('/list')
    }

    const Ajouter = async (e) =>{
        e.preventDefault()
        history.push('/ajouter')
    }


    return (
        <div className="profile">
            <p style={{color:'blue',cursor:'pointer'}} onClick={Ajouter}>Ajouter Un nouveau Produit</p>
            <p>MODIFIER LE PROFILE</p>

            <input type="text"
            value={data.nom}
            onChange={e => {
                setData(
                    {
                        nom:e.target.value,
                        prenom:prenom,
                        url:url
                    }
                )}}
            />

            <input type="text"
            value={data.prenom}
            onChange={e => {
                setData(
                    {
                        nom:nom,
                        prenom:e.target.value,
                        url:url
                    }
                )}}
            />
            <p>choisir une photo</p>
            <img className="photo" alt="photo" src={fileUrl} /> 
            <input
            className='input' 
              type="file" 

              placeholder="Choose a file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) =>{
                handleLoad(e);
              }}/>
               
            
            <button onClick={valider}>Validé</button>
              
        </div>
    )
}

export default Profil