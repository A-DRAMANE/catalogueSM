import React, { useState, useContext } from 'react'
import {setUseName, setUserSurname, setUserInfo } from '../localStorage/setData'
import {getUserInfo} from '../localStorage/getData'
import {DataContext} from '../Context'
import logo from '../0.png'
import { useHistory } from 'react-router';
import {app} from '../base'
import '../css/LogIn.css'
import '../css/Inscription.css'

function Inscription() {

    //global variable
    let history = useHistory();
    const [data, setData] = useContext(DataContext)
    const [fileUrl, setFileUrl] = useState("")
    const [nom, setnom] = useState("")
    const [prenom, setprenom] = useState("")
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    
    const handleInscription = (e) => {
        e.preventDefault();

            fetch("http://localhost:4000/index.php?callData")
            .then((response) => response.json())
            .then((response) => {
                let USER = JSON.parse(response.USER)
                let d = new Date();
                let Id = d.getTime()
                let curentUSER =
                    {
                    nom:nom,
                    prenom:prenom,
                    email:email,
                    pass:pass,
                    id:Id
                }

                //save user info in local to connect back
                if (getUserInfo()) {
                    let info = getUserInfo();
                    let newInfo = {
                        id:Id,
                        url:fileUrl
                    }
                    info.push(newInfo) 
                    setUserInfo(info)
                }else{
                    let info = [{
                        id:Id,
                        url:fileUrl 
                    }]
                    setUserInfo(info)
                }

                //save user info in dataBase
                USER.push(curentUSER)
                USER = JSON.stringify(USER)
                setUseName(nom);
                setUserSurname(prenom);
        
                fetch("http://localhost:4000/index.php?USER="+USER)
                history.push('/list')
            })
            .catch((response) => console.log("ERREUR CHARGEMENT",response))
        ;}
        
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


    return (
        <div className="logIn" >
        <form onSubmit={handleInscription}>
            <img src={logo} alt="logo"/>
            <p>INSCRIPTION</p>
            <input
                required
                type="text"
                placeholder="Nom"
                onChange={e => {
                    setData(
                        {
                            nom:e.target.value,
                            prenom:prenom,
                            url:''
                        }
                    )
                    setnom(e.target.value)}}
                />
                <input
                    required
                    type="text"
                    placeholder="Prenom"
                    onChange={e => {
                        setData(
                            {
                                nom:nom,
                                prenom:e.target.value,
                                url:''
                            }
                        )
                        setprenom(e.target.value)}}
                />
                <input
                    required
                    type="email"
                    placeholder="email"
                    onChange={e => {
                        setemail(e.target.value)}}
                />
                <input
                    required
                    type="password"
                    placeholder="pass"
                    onChange={e => {
                        setpass(e.target.value)}}
                />
                <p style={{fontWeight:'bold'}}>Ajouter une photo</p>
                <img className="photo" alt='photo' src={fileUrl} /> 
                <div className='stop'></div>
                <input
                    className='input' 
                    type="file" 

                    placeholder="Choose a file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) =>{
                        handleLoad(e);
                }}/>
                 
            <button>LOGUP</button>
        </form>
    </div>
    )
}

export default Inscription
