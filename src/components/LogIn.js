import React, { useState, useContext } from 'react'
import {setUseName, setUserSurname} from '../localStorage/setData'
import {getUserInfo} from '../localStorage/getData'
import {DataContext} from '../Context'
import logo from '../0.png'
import { useHistory } from 'react-router';
import '../css/LogIn.css'

function LogIn() {

    const [data, setData] = useContext(DataContext)

    let history = useHistory();

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    let USER ;

    if (data.nom == "") {
        fetch("http://localhost:4000/index.php?callData")
        .then((response) => response.json())
        .then((response) => {
            USER = JSON.parse(response.USER)
        })
        .catch((response) => console.log("ERREUR CHARGEMENT",response))
        }

    const handleLogUp = (e) => {
        e.preventDefault();
        history.push('/inscription')
    }

    

    const handleConnect = (e) =>{
        e.preventDefault();
        let check = 0;

        if (USER[0] == undefined) {
            alert("Vous n'etes pas inscrit\nVeillez vous Inscrit\nMERCI!")
        }else{
            for (let i = 0; i < USER.length; i++) {
                const element = USER[i];
                console.log(element);
                if (element.pass == password && element.email == email) {
                    setUseName(element.nom);
                    setUserSurname(element.prenom);
                    setData({
                        nom:element.nom,
                        prenom:element.prenom
                        })
                    
                    const elementUSER = USER[i];
                    if (getUserInfo()) {
                        for (let y = 0; y < getUserInfo().length; y++) {
                        const element = getUserInfo()[y];
                        if (elementUSER.id == element.id) {
                            setData({
                            nom:elementUSER.nom,
                            prenom:elementUSER.prenom,
                            url:element.url
                            })
                    }
                    }
                    
                }
                check = 1;
                    history.push('/list')
            }
                    
            }

            if (check == 0) {
                alert("Vous n'etes pas inscrit\nVeillez vous Inscrit\nMERCI!")
            }
        }


    }

    return (
        <div className="logIn" >
            <form onSubmit={handleConnect}>
                <img src={logo} alt="logo"/>
                <p>CONNEXION</p>
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
                    placeholder="password"
                    onChange={e => {
                        setpassword(e.target.value)}}
                />
                <button>LOGIN</button>
            </form>
            <p onClick={handleLogUp} style={{color:'blue',cursor:'pointer',fontSize:'30px',textDecoration : 'underline'}} className='inscription'>Insription...</p>
        </div>
    )
}

export default LogIn
