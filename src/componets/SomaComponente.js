import React, { useState } from 'react';
const SomaComponente = () => {
const valor1 = 10; // Primeiro valor constante
const valor2 = 20; // Segundo valor constante
const [resultado, setResultado] = useState(null);
const calcularSoma = () => {
 const soma = valor1 + valor2;
 setResultado(soma);
};
return (
 <div>
 <h1>Calculadora de Soma</h1>
 <button onClick={calcularSoma}>Calcular Soma</button>
 {resultado !== null && <p>{valor1} + {valor2} =
{resultado}</p>}
 </div>
);
}
export default SomaComponente;

