import React, { useState } from 'react';

// numeroDoDocumento: "14041737706",
// tipoDeConexao: "bifasico",
// classeDeConsumo: "comercial",
// modalidadeTarifaria: "branca",
// historicoDeConsumo: [
//   3878,
//   9760,
//   5976,
//   2797,
//   2483,
//   5731,
//   7538,
//   4392,
//   7859,
//   4160,
//   6941,
//   4597
// ]

const Form = () => {
  const [connection, setConnection] = useState('monofasico');
  const [consumption, setConsumption] = useState('residencial');
  const [fee, setFee] = useState('azul');
  const [document, setDocument] = useState('');
  const [current, setCurrent] = useState(0);
  const [history, setHistory] = useState([current])
 
  const options = (obj, index) => (<option key={index} value={obj}>{obj}</option>);
  const enabled = () => {
    return connection.length > 5 && consumption.length > 5 && fee.length > 3 && document.length > 10
  }

  // const array = [0,1,2,3,4,5,6,7,8,9,10,11]
  const validateConsumption = (arg) =>{
    console.log(`History: ${history} Current: ${current}`)
    setHistory([...history, arg])
    setCurrent(0)
  }
  

  return (
  <>
  <input
    type="number"
    onChange={({target}) => setCurrent(target.value)}
    />Consumo do mês
  <button
    type="button"
    onClick={() => validateConsumption(current)}
    >
      Enviar consumo atual
  </button>

  <input
    type='text'
    value= {document}
    placeholder= 'Número do Documento'  
    onChange= {({target}) => setDocument(target.value)}/>
  Tipo de conexão
  <select
    value = {connection}
    onChange = {({ target }) => setConnection(target.value) }>
    {['monofasico', 'bifasico', 'trifasico'].map((el, index) => options(el, index))}
  </select>
  Tipo de consumo
  <select
    value = {consumption}
    onChange = {({ target }) => setConsumption(target.value) }>
    {['residencial', 'industrial', 'comercial', 'rural', 'poderPublico'].map((el, index) => options(el, index))}
  </select>
  Modalidade Tarifária
  <select
    value = {fee}
    onChange = {({ target }) => setFee(target.value) }>
    {['azul', 'branca', 'verde', 'convencional'].map((el, index) => options(el, index))}
  </select>

  <button
      type='button'
      // onClick={ () => post(obj)}
      disabled= {!enabled()}
      >
        Enviar
      </button>
  </>
  )
}

export default Form;