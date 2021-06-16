import React from 'react'

const handleSend = (e) => {
    e.preventDefault();
    let user = JSON.stringify(
        {
        nom:"dramane",
        prnom:"abdoul"
    }
    )
    console.log(user);

    fetch('http://localhost:4000/index.php?USER='+user)
}

function Ajouter() {
    return (
        <div>
            <form onSubmit={handleSend} method='GET'>
            <p> AJOUTER UN PRODUIT</p>
            <br/>
            <br/>

            <p> Categorie</p>
            <input
                type="text"
                placeholder="Entrer"/>

            <p> Nom du vehicule</p>
            <input
                type="text"
                placeholder="Entrer"/>

            <p> Année</p>
            <input
                type="number"
                placeholder="Entrer"/>

            <button>VALIDE</button>

            </form>

        </div>
    )
}

export default Ajouter
