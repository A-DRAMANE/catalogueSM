import React, { useState, useEffect, useContext } from 'react'
import {DataContext} from '../Context'
import { useHistory } from 'react-router';
import {getUserInfo} from '../localStorage/getData'
import {setUserInfo} from '../localStorage/setData'
import {setURL} from '../localStorage/setData'
import '../css/Profil.css'
import {app} from '../base'

function Profil() {

    //global variable
    let history = useHistory();
    const [data, setData] = useContext(DataContext)
    const [fileUrl, setFileUrl] = useState("")
    let nom = data.nom
    let prenom = data.prenom
    let url = data.url

    

    //storage pic to firebase
    const handleLoad = async (e) => {
        
        //add loader
        let load = document.querySelector(".stop")
        load.classList.add("load")

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
    load.classList.remove("load")
}

    //save user's news datas
    const valider = async (e) =>{
        e.preventDefault();
        fetch("http://localhost:4000/index.php?callData")
            .then((response) => response.json())
            .then((response) => {
                let USER = JSON.parse(response.USER)

                //save user new pic
                for (let i = 0; i < USER.length; i++) {
                    const elementUSER = USER[i];
                    if (getUserInfo()) {
                        for (let y = 0; y < getUserInfo().length; y++) {
                        const element = getUserInfo()[y];
                        if (elementUSER.id == element.id) {
                        let info = getUserInfo();
                            let newInfo = {
                                id:element.id,
                                url:fileUrl
                            }
                            info.push(newInfo) 
                            setUserInfo(info)
                            getUserInfo().splice(y)
                    }
                }
                    
                }
                history.push('/list')
                    
                    
                }

                USER.forEach(elementUSER => {
                    getUserInfo().forEach(element => {
                        if (element.id == elementUSER.id) {
                            element.url = fileUrl;
                            
                    }
                    });
                    
                    
                });
                //save user info in local to connect back
                
                history.push('/list')
            })
            .catch((response) => console.log("ERREUR CHARGEMENT",response))
    }

    const Ajouter = async (e) =>{
        e.preventDefault()
        history.push('/ajouter')
    }


    return (
        <div className="profile">
            <form>
            <p style={{color:'blue',cursor:'pointer',fontWeight:'bold'}} onClick={Ajouter}>*Ajouter Un nouveau Produit</p>
            <p style={{fontWeight:'bold'}}>MODIFIER LE PROFILE</p>

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
            <p style={{fontWeight:'bold'}}>choisir une photo</p>
            <img className="photo" alt='photo' src={fileUrl} /> 
            {//<p>{alt}</p>
            }
            <div className='stop'></div>
            <input
            className='input' 
              type="file" 

              placeholder="Choose a file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) =>{
                handleLoad(e);
              }}/>
               
            
            <button className='sub' onClick={valider}>Validé</button>
        </form>
              
        </div>
    )
}

export default Profil
