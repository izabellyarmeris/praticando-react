import {useEffect, useState} from 'react'

const HookuseEffect = () => {
  useEffect(() => {
    console.log("Sendo executado")
  });

  const [numero, setNumero] = useState(1);

  const mudaAlgumaCoisa = () => {
         setNumero(numero + 1);
    
  }
  return (
    <div>

        <h2>useEffect</h2>
        <p>Numero: {numero}</p>
        <button onClick={mudaAlgumaCoisa}>MUda alguma coisa</button>
        <hr />

    </div>
  )
}
y
export default HookuseEffect