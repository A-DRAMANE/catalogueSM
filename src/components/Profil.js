import React, { useState, useEffect, useContext } from 'react'
import {DataContext} from '../Context'
import { useHistory } from 'react-router';
import '../css/Profil.css'
import {app} from '../base'

function Profil() {

    //global variable
    let history = useHistory();
    const [alt, setalt] = useState('')
    const [data, setData] = useContext(DataContext)
    const [fileUrl, setFileUrl] = useState("")
    let nom = data.nom
    let prenom = data.prenom
    let url = data.url

    

    //storage pic to firebase
    const handleLoad = async (e) => {
        
        setalt('Chargement...')
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
    setalt('derminé')
}

    //save user's news datas
    const valider = async (e) =>{
        let user = JSON.stringify([
            {
            nom:data.nom,
            prenom:data.prenom,
            url: data.url
        }])

        //call API for save
        fetch("http://localhost:4000/index.php?USER="+user)
        e.preventDefault()
        history.push('/list')
    }

    const Ajouter = async (e) =>{
        e.preventDefault()
        history.push('/ajouter')
    }


    return (
        <div className="profile">
            <form>
            <p style={{color:'blue',cursor:'pointer'}} onClick={Ajouter}>Ajouter Un nouveau Produit</p>
            <p>MODIFIER LE PROFILE</p>

            <input type="text"
            value={data.nom}
            placeholder='NOM'
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
            placeholder='PRENOM'
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
            <img className="photo" alt='photo' src={fileUrl} /> 
            <p>{alt}</p>
            <input
            className='input' 
              type="file" 

              placeholder="Choose a file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) =>{
                handleLoad(e);
              }}/>
               
            
            <button onClick={valider}>Validé</button>
        </form>
              
        </div>
    )
}

export default Profil
