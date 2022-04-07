import React, { useState } from 'react';

export default function JoinForm(props) {

    const [name, setName] = useState("");

    function createGame() {
        alert("Creer une partie");
    }

    function joinGame() {
        alert("Rejoindre une partie");
    }

    return (

        <div className="">
            <input placeholder='Entrez votre pseudo' value={name} onChange={(e) => setName(e.target.value)} type='text' className='input input-bordered '/>

            <button className="btn btn-secondary" onClick={createGame}>Créer une partie</button>

            <button className="btn btn-secondary" onClick={joinGame}>Rejoindre une partie</button>

        </div>

    );

}