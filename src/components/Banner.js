import React from 'react'
import logo from '../0.png'
import { useHistory } from 'react-router';
import User from './User'
import '../css/Banner.css'

function Banner() {
    let history = useHistory();
    
    const handleList = (e) =>{
        e.preventDefault();
        history.push("/list");
    }

    return (
        <div className="banner">
            <img
                className="logo"
                src={logo}
                alt="logo"
                onClick={handleList}
            />
            <User/>
        </div>
    )
}

export default Banner
