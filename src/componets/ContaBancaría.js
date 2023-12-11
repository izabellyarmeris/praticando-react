import React, { useState } from 'react';
import ContaBancaria from './ContaBancaría';

function App() {
  const [saldo, setSaldo] = useState(1000); // Valor inicial do saldo

  // Função para atualizar o saldo
  const atualizarSaldo = (novoSaldo) => {
    setSaldo(novoSaldo);
  };

  // se tivesse um botão, poderia ficar
  const manipulaBotaoClick = () => {
    const novoSaldo = saldo + 100;
    atualizarSaldo(novoSaldo);
  };


  return (
    <div>
      <h1>Minha Aplicação Bancária</h1>
	<p>Saldo: {saldo}</p>
      <ContaBancaria saldoInicial={saldo} atualizarSaldo={atualizarSaldo} />
      <button onClick={manipulaBotaoClick}>Depositar 100</button>
    </div>
  );
}

export default App;