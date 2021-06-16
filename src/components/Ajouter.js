import React from 'react'

const handleSend = (e) => {
    e.preventDefault();

    fetch('http://localhost/SM/API.php').then(response => {
        
        console.log(response.json());
    })
      .catch(function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      });
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
