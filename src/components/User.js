import React, { useContext } from 'react'
import {DataContext} from '../Context'
import '../css/User.css'


function User() {
    const [data, setData] = useContext(DataContext)

    return (
        <div className='user'>
            <img
                src={data.url}
                alt='user'
            />
            <div className="name">{data.prenom} {data.nom}</div>
        </div>
    )
}

export default User
