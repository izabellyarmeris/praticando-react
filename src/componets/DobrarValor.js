import React, { useState } from 'react';


function Calculadora() {
    const [valorEntrada, setValorEntrada] = useState(''); // Estado para armazenar o valor inserido


    const [valorSaida, setValorSaida] = useState(''); // Estado para armazenar o resultado

    // Função para lidar com a alteração do valor de entrada


    const manipulaMudanca = (event) => {

        setValorEntrada(event.target.value);

    };

    // Função para dobrar o valor inserido



    const doubleValue = () => {
        const value = parseFloat(valorEntrada); // Converte a entrada para um número



        if (!isNaN(value)) {



            setValorSaida(`O dobro de ${value} é ${value * 2}`);



        } else {

            setValorSaida('Por favor, insira um número válido.')

        }



    };


    return (
        <div>
            <h1>Calculadora Simples</h1>



            <input



                type="text"



                placeholder="Insira um valor"



                value={valorEntrada}



                onChange={manipulaMudanca}



            />



            <button onClick={doubleValue}>Dobrar</button>



            <p>{valorSaida}</p>



        </div>



    );



}

export default Calculadora;
