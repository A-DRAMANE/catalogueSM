import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import {getCars} from '../localStorage/getData'
import {DataContext} from '../Context'
import '../css/Menu.css'

function Menu() {
    let history = useHistory();

    const [data, setData] = useContext(DataContext)

    let nom = data.nom
    let prenom = data.prenom
    let url = data.url

    const handleProfil = (e) =>{
        e.preventDefault();
        history.push("/profil");
    }

    const handleCateguorie = (e) =>{
        e.preventDefault();
        history.push("/categuorie");
    }
    const handleOut = (e) =>{
        setData({
            nom : ""
        })
        e.preventDefault();
        history.push("/");
    }

    const handleSearch = (e) =>{
        e.preventDefault();
        if (data.search === ' ') {
            history.push("/list");
        }else{
            history.push("/search");
        }
        
    }

    return (
        <div className="menu">
            <div className="search-main">
                
                <div className="input">
                    <h3>Chercher un véhicul</h3>
                    <input
                        type="search"
                        placeholder='nom du vehicule'
                        onChange={(e) => {
                            setData({
                                nom:nom,
                                prenom:prenom,
                                url:url,
                                search: e.target.value
                            })
                            handleSearch(e)}}
                    />
                </div>

                <div className="radio">
                    <button
                        onClick={handleCateguorie}
                    >Categories</button>
                    <button
                        onClick={handleProfil}>
                        PROFIL</button>
                    <button
                        onClick={handleOut}>
                        logOut</button>
                </div>
                
            </div>
        </div>
    )
}

export default Menu
