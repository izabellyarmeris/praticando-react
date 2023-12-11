import React, { useState } from 'react';

function Operacoes() {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [soma, setSoma] = useState(0);
    const [subtracao, setSubtracao] = useState(0);
    const [multiplicacao, setMultiplicacao] = useState(0);
    const [divisao, setDivisao] = useState(0);

    const calcularOperacoes = () => {
        const num1 = parseFloat(valor1);
        const num2 = parseFloat(valor2);

        setSoma(num1 + num2);
        setSubtracao(num1 - num2);
        setMultiplicacao(num1 * num2);
        setDivisao(num1 / num2);

    };

    return (
        <div class= 'main'>
            <h1> Calculadora Da Bell</h1>
            <input
                type="number"
                value={valor1}
                onChange={(e) => setValor1(e.target.value)}
            />
            <input
                type="number"
                value={valor2}
                onChange={(e) => setValor2(e.target.value)}
            />
            <button onClick={calcularOperacoes}>Calcular</button>
            <div class = 'resultados' >
                <span>Soma: {soma}</span>
                <span>Subtração: {subtracao}</span>
                <span>Multiplicação: {multiplicacao}</span>
                <span>Divisão: {divisao}</span>
            </div>
        </div>

    );
}

export default Operacoes;