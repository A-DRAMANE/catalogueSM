import React, { useState, useContext } from 'react'
import {setUseName, setUserSurname} from '../localStorage/setData'
import { getName } from '../localStorage/getData'
import {DataContext} from '../Context'
import logo from '../0.png'
import { useHistory } from 'react-router';
import '../css/LogIn.css'

function LogIn() {

    const [data, setData] = useContext(DataContext)

    let history = useHistory();

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const handleConnect = (e) =>{
        e.preventDefault();
        setUseName(name)
        setUserSurname(surname)
        if (getName()) {
            history.push('/list')
        }else{
            alert('Remplissez tout les champs correctement')
        }

    }

    return (
        <div className="logIn" >
            <form onSubmit={handleConnect}>
                <img src={logo} alt="logo"/>
                <p>CONNEXION</p>
                <input
                    type="text"
                    placeholder="Nom"
                    onChange={e => {
                        setData(
                            {
                                nom:e.target.value,
                                prenom:surname,
                                url:''
                            }
                        )
                        setName(e.target.value)}}
                />
                <input
                    type="text"
                    placeholder="Prenom"
                    onChange={e => {
                        setData(
                            {
                                prenom:e.target.value,
                                nom:name,
                                url:''
                            }
                        )
                        setSurname(e.target.value)}}
                />
                <button>LOGIN</button>
            </form>
        </div>
    )
}

export default LogIn
