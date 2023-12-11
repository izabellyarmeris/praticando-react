import React, { useState } from "react";
import React from App.css 
function NovoTreinamento (props){

    const [nome, setNome] = useState('Treinamento');
    const [novoNome, setNovoNome] = useState('')




    return(
        <div>
            <p>{nome}</p>
            <button class="nome" onClick={() => setNome ('Javascript')}  >Click</button>

            <p>{novoNome}</p>
            <button class="nome" onClick={() => setNovoNome ('Proa')}  >Click</button>
        </div>
    )

}
export default NovoTreinamento;
